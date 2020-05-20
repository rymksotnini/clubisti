<?php

namespace App\Http\Controllers;

use App\Http\Resources\BadgeCollection;
use App\Http\Resources\Badge as BadgeResource;
use App\Models\Badge;
use Illuminate\Http\Request;

class BadgeController extends Controller
{
    public function index(Request $request)
    {

        if ($request->page  && $request->perPage){
            return new BadgeCollection(Badge::paginate($request->perPage));
        }else if ($request->page ){
            return new BadgeCollection(Badge::paginate(10));
        }
        return new BadgeCollection(Badge::get());
    }

    public function show($id)
    {
        return new BadgeResource(Badge::findOrFail($id));
    }

    public function store(Request $request)
    {
        // test upper bound > 0
       $exist= Badge::where('deleted', false)->orderBy('upper_bond', 'desc')->first();
        $badge = new Badge;
        // first badge lower bound = 0
        if(!$exist){
            error_log("ee");

            $badge->name = $request->name;
            $badge->upper_bond = $request->upperBond;
            $badge->lower_bond = 0;

            $badge->save();
            return (new BadgeResource($badge))
                ->response()
                ->setStatusCode(201);
        }

error_log("com");
        error_log($request->upperBond);
        error_log($exist->upper_bond);
        // test upper bound > last upper bound
        if ($request->upperBond <= $exist->upper_bond )
            return response()->json([
                'message' => 'Invalid Upper bound'], 404);


        // new badge must start from last uperbound + 1
        $badge->name = $request->name;
        $badge->upper_bond = $request->upperBond;
        $badge->lower_bond = $exist->upper_bond  + 1;

        $badge->save();
        return (new BadgeResource($exist))
            ->response()
            ->setStatusCode(201);


    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $badge = Badge::findOrFail($id);
        $badge->name = $request->name;
        $badge->save();

        return (new BadgeResource($badge))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $badge = Badge::findOrFail($id);
        if($badge) {
            $badge->deleted = true;
            $badge->save();
        }

        return response()->json(null, 204);
    }

    public function deleteFinal($id)
    {
        $badge = Badge::findOrFail($id);
        $badge->delete();

        return response()->json(null, 204);
    }




}
