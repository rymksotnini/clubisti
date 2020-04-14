<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Socialite;
use App\Services\SocialFacebookAccountService;
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
     * @return callback URL from facebook
     */
    public function callback(SocialFacebookAccountService $service)
    {
        error_log('callback');
        $user = $service->createOrGetUser(Socialite::driver('facebook')->stateless()->user());
        error_log($user);
        auth()->login($user);

        //return redirect()->to('/home');
        return $user;
    }
}
