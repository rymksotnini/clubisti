<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryCollection;
use App\Http\Resources\Category as CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use function PHPSTORM_META\elementType;


class CategoryController extends Controller
{
    public function index(Request $request)
    {
        error_log($request->page);
        if ($request->page  && $request->perPage){
            return new CategoryCollection(Category::paginate($request->perPage));
        }else if ($request->page ){
            return new CategoryCollection(Category::paginate(1));
        }
        return new CategoryCollection(Category::get());
    }
    public function indexPagination($page)
    {
        error_log("in pagination");
        return new CategoryCollection(Category::paginate($page));
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

