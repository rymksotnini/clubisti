<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoleCollection;
use App\Http\Resources\Role as RoleResource;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return new RoleCollection(Role::get());
    }

    public function show($id)
    {
        return new RoleResource(Role::findOrFail($id));
    }

    public function store(Request $request)
    {
        $role = Role::create($request->all());

        return (new RoleResource($role))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $role = Role::findOrFail($id);
        $role->update($request->all());

        return (new RoleResource($role))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $role = Role::findOrFail($id);
        $role->delete();

        return response()->json(null, 204);
    }

}
