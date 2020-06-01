<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProfileCollection;
use App\Http\Resources\Profile as ProfileResource;
use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index()
    {
        return new ProfileCollection(Profile::get());
    }

    public function show($id)
    {
        return new ProfileResource(Profile::findOrFail($id));
    }

    public function store(Request $request)
    {
        $profile = Profile::create($request->all());

        return (new ProfileResource($profile))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $profile = Profile::findOrFail($id);
        $profile->update($request->all());

        return (new ProfileResource($profile))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $profile = Profile::findOrFail($id);
        $profile->delete();

        return response()->json(null, 204);
    }

    public function setBalance(Request $request, $id){
        $user = User::findOrFail($id);
        $profile = $user->profile;
        if($profile){
            $profile->balance = $request->input('balance');
        }
        else{
            $profile = Profile::create($request->input('balance'));
            $profile->user()->associate($user);
        }
        $profile->save();
        return (new ProfileResource($profile))
            ->response()
            ->setStatusCode(201);
    }

    public function getProfile($id) {
        $currentUser = User::findOrFail($id);
        $currentProfile =$currentUser->profile;
        return new ProfileResource($currentProfile);
    }
}
