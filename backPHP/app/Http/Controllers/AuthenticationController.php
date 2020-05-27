<?php

namespace App\Http\Controllers;

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
        error_log($request->json('email'));
        error_log($request->json('username'));
        error_log('000000');
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255|unique:users',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json("existent mail or invalid password",406);
        }
        $user = User::create($request->all());
        error_log('111111111');
        $token = auth()->login($user);
        error_log('2222222222');
        $user_id = auth()->id();
        error_log($user_id);
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
        error_log($user_id);
        return $this->respondWithTokenAndUser($token,$user_id);
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
}
