<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\User as UserResource;
use App\Models\Address;
use App\Models\Country;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class UserController extends Controller
{
    public function index(Request $request)
    {
        error_log($request->page);
        if ($request->page  && $request->perPage){
            error_log("in if");
            return new UserCollection(User::paginate($request->perPage));
        }else if ($request->page ){
            return new UserCollection(User::paginate(10));
        }

        return new UserCollection(User::get());
    }

    public function show($id)
    {
        return new UserResource(User::findOrFail($id));
    }

    public function store(Request $request)
    {
        $user = User::create($request->all());

        return (new UserResource($user))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $user = User::findOrFail($id);
        $user->update($request->all());

        return (new UserResource($user))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $user = User::findOrFail($id);
        if($user) {
            $user->deleted = true;
            $user->save();
        }

        return response()->json(null, 204);
    }

    public function getUserWithRelationship($id){
        $user = User::findOrFail($id);
        if($user) {
            $profile = $user->profile;
            if(!$profile){
                return response()->json("non existent profile",406);
            }
            $address = $profile->address;
            if(!$address){
                return response()->json([
                    'user' => json_encode($user),
                    'profile'   => json_encode($profile),
                ]);
            }
            $country = $address->country;
            if(!$country){
                return response()->json([
                    'user' => json_encode($user),
                    'profile'   => json_encode($profile),
                    'address'   => json_encode($address),
                ]);
            }
            return response()->json([
                'user' => json_encode($user),
                'profile'   => json_encode($profile),
                'address'   => json_encode($address),
                'country'   => json_encode($country),
            ]);
        }
        return response()->json("non existent user",406);
    }

    public function createOrUpdate(Request $request,$id){
        $user = User::find($id);
        if(!$user){
            return response()->json("non existent user",406);
        }
        error_log("1");
        $user->update(Arr::except($request->input('user'), ['profile']));
        error_log("2");
        $profile_update = $request->input('user.profile');
        error_log(json_encode($profile_update));
        $address_update = $request->input('user.profile.address');
        error_log(json_encode($address_update));
        $country_update = $request->input('user.profile.address.country');
        error_log(json_encode($country_update));
        $profile = $user->profile();
        if (!$profile){
            $user->profile()->create(Arr::except($profile_update, ['address']));
        }
        else{
            $user->profile()->update(Arr::except($profile_update, ['address']));
        }
        $address= $profile->address();
        if (!$address){
            $address=Address::create(Arr::except($address_update, ['country']));
        }
        else{
            $address->update(Arr::except($address_update, ['country']));
        }
        $profile->address()->associate($address);
        $profile->update();
        $country = $address->country();
        if (!$country){
            $country=Country::create($country_update);
        }
        else{
            $country->update($country_update);
        }
        $address->country()->associate($country);
        $address->update();
        return response()->json([
            'user' => json_encode($user)
        ]);
    }
}
