<?php
namespace App\Services;
use App\Models\SocialFacebookAccount;
use App\Models\User;
use Laravel\Socialite\Contracts\User as ProviderUser;
class SocialFacebookAccountService
{
    public function createOrGetUser(ProviderUser $providerUser)
    {
        error_log($providerUser->token);
        $account = SocialFacebookAccount::whereProvider('facebook')
            ->whereProviderUserId($providerUser->getId())
            ->first();
        if ($account) {
            error_log("in account " . $account);
            return $account->user;
        } else {
            error_log("in provider " .$providerUser->token);
            $account = new SocialFacebookAccount([
                'provider_user_id' => $providerUser->getId(),
                'provider' => 'facebook'
            ]);
            $user = User::whereEmail($providerUser->getEmail())->first();
            if (!$user) {
                $user = User::create([
                    'email' => $providerUser->getEmail(),
                    'username' => $providerUser->getName(),
                    'password' => md5(rand(1,10000)),
                    'first_name' => $providerUser->getName(),
                    'last_name' => $providerUser->getName()
                ]);
            }
            $account->user()->associate($user);
            $account->save();
            return $user;
        }
    }
}
