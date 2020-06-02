<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function downloadImage(Request $request)
    {


        if ($request->hasFile('image'))
        {
            $file = $request->file('image');
            error_log($file);
            $filename  = $file->getClientOriginalName();
            error_log($filename);
            $extension = $file->getClientOriginalExtension();
            error_log($extension);
            $picture   = date('His').'-'.$filename;
            error_log($picture);
            error_log(public_path('img'));
            $user = User::find($request->id_user);
            $profile = $user->profile;
            if (!$profile) {
                $profile = new Profile(['image_url' => $picture]);
                $user->profile()->save($profile);
                return response()->json(["message" => "Image Uploaded Successfully"]);
            }
            if($profile->image_url) {
                error_log("deleting...");
                error_log(public_path("img\\$profile->image_url"));
                File::delete(public_path("img\\$profile->image_url"));
            }
            $file->move(public_path('img'), $picture);
            $profile->image_url= $picture;
            $profile->save();
            return response()->json(["message" => "Image Uploaded Successfully"]);
        }
        else
        {
            return response()->json(["message" => "Select image first."]);
        }
    }

    public function uploadImage(Request $request,$id){
        error_log($id);
        $profile= User::find($id)->profile;
        if($profile==null){
            return response()->json("non existent profile",406);
        }
        error_log($profile);
        error_log($profile->image_url);
        if($profile->image_url==null){
            return response()->json("non existent image",406);
        }
        return response()->json($profile->image_url);
    }
}
