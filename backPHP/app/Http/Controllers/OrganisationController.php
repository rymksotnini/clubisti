<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrganisationCollection;
use App\Http\Resources\Organisation as OrganisationResource;
use App\Models\Organisation;
use Illuminate\Http\Request;

class OrganisationController extends Controller
{
    public function index()
    {
        return new OrganisationCollection(Organisation::get());
    }

    public function show($id)
    {
        return new OrganisationResource(Organisation::findOrFail($id));
    }

    public function store(Request $request)
    {
        $organisation = Organisation::create($request->all());

        return (new OrganisationResource($organisation))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $organisation = Organisation::findOrFail($id);
        $organisation->update($request->all());

        return (new OrganisationResource($organisation))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $organisation = Organisation::findOrFail($id);
        $organisation->delete();

        return response()->json(null, 204);
    }

}
