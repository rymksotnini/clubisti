<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Http\Resources\Project as ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index()
    {
        return new ProjectCollection(Project::get());
    }

    public function show($id)
    {
        return new ProjectResource(Project::findOrFail($id));
    }

    public function store(Request $request)
    {
        $project = Project::create($request->all());

        return (new ProjectResource($project))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $project = Project::findOrFail($id);
        $project->update($request->all());

        return (new ProjectResource($project))
            ->response()
            ->setStatusCode(201);
    }


    public function delete($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json(null, 204);
    }

}
