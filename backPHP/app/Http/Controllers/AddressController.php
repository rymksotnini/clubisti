<?php

namespace App\Http\Controllers;

use App\Http\Resources\AddressCollection;
use App\Models\Address;
use App\Http\Resources\Address as AddressResource;
use Illuminate\Http\Request;

class AddressController extends Controller
{
    public function index()
    {
        return new AddressCollection(Address::get());
    }

    public function show($id)
    {
        return new AddressResource(Address::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'city' => 'required|max:255',
        ]);

        $Address = Address::create($request->all());

        return (new AddressResource($Address))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'city' => 'required|max:255',
        ]);
        $Address = Address::findOrFail($id);
        $Address->update($request->all());

        return (new AddressResource($Address))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $Address = Address::findOrFail($id);
        $Address->delete();

        return response()->json(null, 204);
    }
}
