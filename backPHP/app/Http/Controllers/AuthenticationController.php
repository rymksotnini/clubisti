<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\Badge;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthenticationController extends Controller
{
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
        $user = User::create($request->all() +   ['email_verification_token' => Str::random(32)]);
        $token = auth()->login($user);
        $user_id = auth()->id();
        // add first badge to user
        $badge = Badge::find(1);
        $profile=$user->profile()->create();
        $profile->badge()->associate($badge);
        $profile->save();

        // SEND EMAIL


        return $this->respondWithTokenAndUser($token,$user_id);
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

     public function VerifyEmail($token = null)
        {
        	if($token == null) {

            return response()->json(['error' => 'Invalid Login attempt'], 406);


        	}

           $user = User::where('email_verification_token',$token)->first();

           if($user == null ){

            return response()->json(['error' => 'Invalid Login attempt'], 406);


           }

           $user->update([

            'email_verified' => 1,
            'email_verified_at' => Carbon::now(),
            'email_verification_token' => ''

           ]);

           	//redirect to login page
           	return redirect()->away( env('PROD_URL', 'http://localhost:4200')  . "/#/login");

        }

    }

