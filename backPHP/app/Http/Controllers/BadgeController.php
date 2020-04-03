<?php

namespace App\Http\Controllers;

use App\Http\Resources\BadgeCollection;
use App\Http\Resources\Badge as BadgeResource;
use App\Models\Badge;
use Illuminate\Http\Request;

class BadgeController extends Controller
{
    public function index()
    {
        return new BadgeCollection(Badge::get());
    }

    public function show($id)
    {
        return new BadgeResource(Badge::findOrFail($id));
    }

    public function store(Request $request)
    {
        $badge = Badge::create($request->all());

        return (new BadgeResource($badge))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $badge = Badge::findOrFail($id);
        $badge->update($request->all());

        return (new BadgeResource($badge))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $badge = Badge::findOrFail($id);
        $badge->delete();

        return response()->json(null, 204);
    }

}
