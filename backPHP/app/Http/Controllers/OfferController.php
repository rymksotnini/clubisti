<?php

namespace App\Http\Controllers;

use App\Http\Resources\OfferCollection;
use App\Http\Resources\Offer as OfferResource;
use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function index(Request $request)
    {

        if ($request->page  && $request->perPage){
            return new OfferCollection(Offer::paginate($request->perPage));
        }else if ($request->page ){
            return new OfferCollection(Offer::paginate(3));
        }
        return new OfferCollection(Offer::get());
    }
    public function indexPagination($page)
    {
        error_log("in pagination");
        return new OfferCollection(Offer::paginate($page));
    }

    public function show($id)
    {
        return new OfferResource(Offer::findOrFail($id));
    }

    public function store(Request $request)
    {
        $category = Offer::create($request->all());

        return (new OfferResource($category))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $category = Offer::findOrFail($id);
        $category->update($request->all());

        return (new OfferResource($category))
            ->response()
            ->setStatusCode(201);
    }

    public function delete($id)
    {
        $category = Offer::findOrFail($id);
        if($category) {
            $category->deleted = true;
            $category->save();
        }

        return response()->json(null, 204);
    }
    public function deleteFinal($id)
    {
        $category = Offer::findOrFail($id);
        $category->delete();

        return response()->json(null, 204);
    }

}
