<?php

namespace App\Http\Controllers;
use App\Models\passwordResets;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\Badge;
use App\Mail\MailService;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticationController extends Controller
{
   public $service;
     public function __construct( MailService $service)
    {
        $this->service = $service;
    }

    public function register(Request $request)
    {
        // add badge and balance in creation of user

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json("existent mail or invalid password",406);
        }
        $user = User::create($request->all() + ['email_verification_token' => Str::random(32)]);
        $token = auth()->login($user);
        $user_id = auth()->id();
        // add first badge to user
        $badge = Badge::find(1);
        $profile=$user->profile()->create();
        $profile->badge()->associate($badge);
        $profile->save();

        // SEND EMAIL
        $this->sendVerifyEmail($user);


       return response()->json(['message' => 'Please verify your email'], 202);
    }
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json("invalid email or password",406);
        }
        $credentials = $request->only('email', 'password');
        try {
            if (! $token = auth()->attempt($credentials)) {
                return response()->json(['error' => 'Unauthorized'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $user_id = auth()->id();
        $user = User::find($user_id);

        //check if email verified

       if($user->email_verified == 1){

       return $this->respondWithTokenAndUser($token,$user_id);
       }
         return response()->json(['error' => 'Email unverified'], 406);
    }

    public function logout()
    {

        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithTokenAndUser($token,$id)
    {
        return response()->json([
            'token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth()->factory()->getTTL() * 60*24*30,
            'user' => json_encode(User::find($id))
        ]);
    }



      public function sendVerifyEmail($user){
     $to_name = $user->username;
     $to_email = $user->email;
     $link = env('PROD_URL', 'http://localhost:8000')."/api/verify/".$user->email_verification_token;
     error_log($link);
     $data = array('name'=>$user->username, "verifyLink" => $link);

    $this->service->sendTo($to_name, $to_email, $data, "emails.verifyEmail", "Email verification", "Email verification");

    }
     public function VerifyEmail($token = null)
        {


        	if($token == null) {
            return response()->json(['error' => 'Invalid Login attempt'], 406);

        	}
           $user = User::where('email_verification_token',$token)->first();
           if($user == null ){
            return response()->json(['error' => 'Invalid Login attempt'], 406);
           }

           $user->email_verified = true;
           $user->email_verified_at = Carbon::now();
           $user->email_verification_token = '';
           $user->save();

           	//redirect to login page
           	return redirect()->away( env('FRONT_URL', 'http://localhost:4200')  . "/#/auth/login");

        }


        public function resetPasswordEmail(Request $request){

            $user = User::where('email', $request->email)->first();

            if (!$user) {
                return response()->json(['error' => 'User not found'], 406);
            }

            // Delete old token
            DB::table('password_resets')->where('email', $request->email)
                ->delete();
            //Create token
            $tokenData = Str::random(6);
            //Create Password Reset Token
            DB::table('password_resets')->insert([
                'email' => $request->email,
                'token' => $tokenData,
                'created_at' => Carbon::now()
            ]);

            //Get the token just created above

            error_log($tokenData);

            // send Email with token
            $this->sendResetPasswordEmail($user,$tokenData);

            return response()->json(['message' => 'Please check your email'], 202);
        }

    public function verifyTokenReset(Request $request){

        //Validate input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
             'token' => 'required' ]);

    //check if payload is valid before moving on
       if ($validator->fails()) {
           return response()->json(['error' => 'Please complete the form'], 406);
      }

       //check token exit
        $reset = passwordResets::where('token', $request->token)->first();

        if (!$reset) {
            return response()->json(['error' => 'Wrong code'], 406);
        }
        // check email match token
        if ($reset->email != $request->email) {
            return response()->json(['error' => 'Invalid Email'], 406);
        }
        $user = User::where('email', $reset->email)->first();

        if (!$user) {
            return response()->json(['error' => 'User Not found'], 406);
        }

        //update the new password
        $user->password = $request->password;
        $user->save();

        //Delete the tokens
        DB::table('password_resets')->where('email', $user->email)
            ->delete();

        return response()->json(['message' => 'Password Reset successfully'], 202);

    }


    public function sendResetPasswordEmail($user,$token){
        $to_name = $user->username;
        $to_email = $user->email;
        $data = array('name'=>$user->username, "tokenData" => $token);
        $this->service->sendTo($to_name, $to_email, $data, "emails.resetEmail", "Reset Password", "Clubisti");
    }




    }

