<?php
namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Services\SocialFacebookAccountService;
use Illuminate\Routing\Redirector ;
class SocialAuthFacebookController extends Controller
{

    public function redirect()
    {
        error_log('redirect');
        return Socialite::driver('facebook')->redirect();
    }
    /**
     * Return a callback method from facebook api.
     *
     * @param SocialFacebookAccountService $service
     * @return \Illuminate\Http\RedirectResponse
     */
    public function callback(SocialFacebookAccountService $service)
    {
        error_log('callback');
        $user = $service->createOrGetUser(Socialite::driver('facebook')->stateless()->user());
        $token = auth()->login($user);
        $user_id = auth()->id();
        error_log("id1: $user_id");
        error_log("hello1: $token");
        //return redirect()->to('/home');
        return redirect()->away( env('PROD_URL', 'http://localhost:4200')  . "/#/fblogin?param=$user_id");
    }

    public function login(Request $request)
    {
        $id = $request->json('param');
        error_log($request->json('param'));
        $token = auth()->login(User::find($request->json('param')));
        error_log("hello2: $token");
        $person=json_encode(User::find($id));
        error_log("hello3: $person");
        return response()->json([
            'token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth()->factory()->getTTL() * 60,
            'user' => json_encode(User::find($id))
        ]);
    }
}
