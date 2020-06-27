<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectMV;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Mail;
use App\Mail\MailService as MailService;
use App\Http\Resources\ProjectCollection;
use App\Http\Resources\ProjectMVCollection;
use App\Http\Resources\Project as ProjectResource;
use App\Http\Resources\ProjectMV as ProjectMVResource;
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
            return new ProjectCollection(Project::paginate(10));
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

    public function showContribution()
    {
        if (Auth::user()){
            $currentUserId = Auth::user()->id;
            $transactions = DB::select( DB::raw("
             SELECT offer_id as projectId,sum(amount) as contribution
             FROM transactions
             where user_id = :userId
             GROUP BY offer_id;"), array(
                'userId' => $currentUserId,
            ));
            $projects =Project::get();

            foreach ($projects as $project) {
                $counter = 0;
                foreach ($transactions as $transaction){
                    $counter = $counter + 1;
                    if ($transaction->projectId == $project->id){
                        $project->contribution = $transaction->contribution;
                        break;
                    }
                    if ($counter >= count($transactions)) {
                        $project->contribution = 0;
                    }
                }

            }


        try {
            return new ProjectMVCollection($projects);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Page Not Found. If error persists, contact info@website.com'], 404);
        }

        }else{
            $projects =Project::get();

            foreach ($projects as $project) {

                        $project->contribution = 0;

                }



            return $projects;
        }

    }




    public function storeWithOffer(Request $request)
    {
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
        error_log($request->categoriesIds[0]);
        if ($request->categoriesIds){
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
        $offer = Offer::findOrFail($project->offer->id);
        $offer->name = $request->name;
        $offer->amount = $request->amount;
        error_log("update:",$request->amount);
        $project->start_date = $request->startDate;
        $project->end_date = $request->endDate;
        $offer->short_description =  $request->shortDescription;
        $project->max_donation_amount = $request->maxDonationAmount;
        $project->min_donation_amount = $request->minDonationAmount;
        $offer->long_description = $request->longDescription;
        $offer->save();
        $offer->project()->save($project);
        if ($request->categoriesIds){
            $offer->categories()->sync($request->categoriesIds);

        }



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

    public function uploadImage(Request $request,$id){
        error_log($id);
        $offer= Offer::find($id);
        if($offer==null){
            return response()->json("non existent offer",406);
        }
        error_log($offer);
        error_log($offer->large_image_path);
        if($offer->large_image_path==null){
            return response()->json("non existent image",406);
        }
        return response()->json($offer->large_image_path);
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
            $offer = Offer::findOrFail($project->offer->id);

            $project->status = 'DELETED';
            $offer->deleted = 1;

            $offer->save();
            $offer->project()->save($project);

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
