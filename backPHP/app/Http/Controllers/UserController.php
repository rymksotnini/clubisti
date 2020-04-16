<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\User as UserResource;
use App\Models\User;
use Illuminate\Http\Request;

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

}
