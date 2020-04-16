<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectCollection;
use App\Http\Resources\Project as ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
//    public function index()
//    {
//        return new ProjectCollection(Project::get());
//    }
    public function index(Request $request)
    {
        error_log($request->page);
        if ($request->page  && $request->perPage){
            return new ProjectCollection(Project::paginate($request->perPage));
        }else if ($request->page ){
            return new ProjectCollection(Project::paginate(5));
        }
        return new ProjectCollection(Project::get());
    }



    public function show($id)
    {
        try {
            return new ProjectResource(Project::findOrFail($id));

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Page Not Found. If error persists, contact info@website.com'], 404);
        }

    }

    public function store(Request $request)
    {
        error_log("in store");
        error_log($request->startDate);
        $project = new Project;
        $project->name = $request->name;
        $project->amount = $request->amount;
        $project->start_date = $request->startDate;
        $project->end_date = $request->endDate;
        $project->short_description =  $request->shortDescription;
        $project->last_updated_sum = 0;
        $project->max_donation_amount = $request->maxDonationAmount;
        $project->status = "PAUSED";
        $project->min_donation_amount = $request->minDonationAmount;



        $project->save();

        if ($request->categoriesIds){

                $project->categories()->sync($request->categoriesIds);

        }

        return (new ProjectResource($project))
            ->response()
            ->setStatusCode(201);
    }


    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $project = Project::findOrFail($id);
        $project->name = $request->name;
        $project->amount = $request->amount;
        $project->start_date = $request->startDate;
        $project->end_date = $request->endDate;
        $project->short_description =  $request->shortDescription;
        $project->max_donation_amount = $request->maxDonationAmount;
        $project->min_donation_amount = $request->minDonationAmount;

        $project->save();

        return (new ProjectResource($project))
            ->response()
            ->setStatusCode(201);
    }


        public function activate($id){

            try {
                $project = Project::findOrFail($id);
                if (($project->status == 'TERMINATED') || ($project->status == 'DELETED')){
                    return response()->json([
                        'message' => 'Project is already  ' . $project->status], 404);
                }

                $project->status = 'ACTIVE';

                $project->save();

                return $project;

            } catch (ModelNotFoundException $e) {
                return response()->json([
                    'message' => 'Project with id ' . $id . ' not found'], 404);
         }

    }

    public function pause($id){

    try {
        $project = Project::findOrFail($id);
        if (($project->status == 'TERMINATED') || ($project->status == 'DELETED')){
            return response()->json([
                'message' => 'Project is already  ' . $project->status], 404);
        }

        $project->status = 'PAUSED';

        $project->save();

        return $project;

    } catch (ModelNotFoundException $e) {
        return response()->json([
            'message' => 'Project with id ' . $id . ' not found'], 404);
    }

}

    public function end($id){

        try {
            $project = Project::findOrFail($id);
            if ($project->status == 'DELETED'){
                return response()->json([
                    'message' => 'Project is already  ' . $project->status], 404);
            }

            $project->status = 'TERMINATED';

            $project->save();

            return $project;

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Project with id ' . $id . ' not found'], 404);
        }

    }

    public function delete($id){

        try {
            $project = Project::findOrFail($id);


            $project->isDeleted = 1;

            $project->save();

            return $project;

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Project with id ' . $id . ' not found'], 404);
        }

    }




    public function deletePermanent($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();

        return response()->json(null, 204);
    }

}
