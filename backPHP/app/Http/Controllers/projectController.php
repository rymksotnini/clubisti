<?php

namespace App\Http\Controllers;


use App\Http\Resources\ProjectCollection;
use App\Http\Resources\Project as ProjectResource;
use App\Models\Project;
use App\Models\Offer;
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

//    public function store(Request $request)
//    {
//        error_log("in store");
//        error_log($request->startDate);
//        $project = new Project;
//        $project->name = $request->name;
//        $project->amount = $request->amount;
//        $project->start_date = $request->startDate;
//        $project->end_date = $request->endDate;
//        $project->short_description =  $request->shortDescription;
//        $project->last_updated_sum = 0;
//        $project->max_donation_amount = $request->maxDonationAmount;
//        $project->status = "PAUSED";
//        $project->min_donation_amount = $request->minDonationAmount;
//
//
//
//        $project->save();
//
//        if ($request->categoriesIds){
//
//            $project->categories()->sync($request->categoriesIds);
//
//        }
//
//        return (new ProjectResource($project))
//            ->response()
//            ->setStatusCode(201);
//    }
    public function storeWithOffer(Request $request)
    {
        error_log("in storeWithOffer");
        $project = new Project;
        $offer = new Offer;
        $offer->name = $request->name;
        $offer->amount = $request->amount;
        $project->start_date = $request->startDate;
        $project->end_date = $request->endDate;
        $offer->short_description =  $request->shortDescription;
        $project->last_updated_sum = 0;
        $project->max_donation_amount = $request->maxDonationAmount;
        $project->status = "PAUSED";
        $project->min_donation_amount = $request->minDonationAmount;
        $offer->long_description = $request->longDescription;
        $offer->save();
        $offer->project()->save($project);
        error_log("wf");
        error_log($request->categoriesIds[0]);
        if ($request->categoriesIds){
            error_log("in if ");
            $offer->categories()->sync($request->categoriesIds);

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

    public function downloadImage(Request $request)
    {
        if ($request->hasFile('largeImage') &&$request->hasFile('shortImage') )
        {

            $offer = Offer::find($request->id);

            if (!$offer) {
                error_log("offer not found");
                return response()->json(["message" => "Offer not found."]);
            }
            $file = $request->file('largeImage');
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.'PG-LG.'.$extension;
            if($offer->large_image_path) {
                error_log("deleting...");
                error_log(public_path("img\\$offer->large_image_path"));
                File::delete(public_path("img\\$offer->large_image_path"));
            }
            $file->move(public_path('img'), $picture);
            $offer->large_image_path= $picture;

            //small image
            $file = $request->file('shortImage');
            $extension = $file->getClientOriginalExtension();
            $picture   = date('His').'-'.'PG-ST.'.$extension;
            if($offer->short_image_path) {
                error_log("deleting...");
                File::delete(public_path("img\\$offer->short_image_path"));
            }
            $file->move(public_path('img'), $picture);
            $offer->short_image_path= $picture;

            //save changes
            $offer->save();
            return response()->json(["message" => "Image Uploaded Successfully"]);
        }
        else
        {
            return response()->json(["message" => "Select image first."]);
        }
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
