<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\Product as ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return new ProductCollection(Product::get());
    }

    public function show($id)
    {
        return new ProductResource(Product::findOrFail($id));
    }

    public function store(Request $request)
    {
        $product = Product::create($request->all());

        $categoryId = $request->input('category');
        $category = Category::find($categoryId);
        $product->categories()->attach($category);

        return (new ProductResource($product))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return (new ProductResource($product))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();

        return response()->json(null, 204);
    }

}
