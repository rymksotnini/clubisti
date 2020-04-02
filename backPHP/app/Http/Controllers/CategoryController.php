<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\Category as CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return new CategoryCollection(Category::get());
    }

    public function show($id)
    {
        return new CategoryResource(Category::findOrFail($id));
    }

    public function store(Request $request)
    {
        $category = Category::create($request->all());

        return (new CategoryResource($category))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $category = Category::findOrFail($id);
        $category->update($request->all());

        return (new CategoryResource($category))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return response()->json(null, 204);
    }

}

