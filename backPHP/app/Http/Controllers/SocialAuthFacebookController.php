<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Services\SocialFacebookAccountService;
use Illuminate\Routing\Redirector ;
class SocialAuthFacebookController extends Controller
{
    /**
     * Create a redirect method to facebook api.
     *
     * @return void
     */
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
        error_log("hello1: $token");
        //return redirect()->to('/home');
        return redirect()->away("http://localhost:4200/#/fblogin");
    }

    public function login()
    {
        $token = auth()->login(Auth::user());
        return response()->json([
            'token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth()->factory()->getTTL() * 60
        ]);
    }
}
