<?php

namespace App\Http\Controllers;

use App\Http\Resources\CountryCollection;
use App\Http\Resources\Country as CountryResource;
use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    public function index()
    {
        return new CountryCollection(Country::get());
    }

    public function show($id)
    {
        return new CountryResource(Country::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $country = Country::create($request->all());

        return (new CountryResource($country))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $country = Country::findOrFail($id);
        $country->update($request->all());

        return (new CountryResource($country))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $country = Country::findOrFail($id);
        $country->delete();

        return response()->json(null, 204);
    }

}
