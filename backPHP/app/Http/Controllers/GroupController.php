<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupCollection;
use App\Mail\MailService;
use App\Models\GroupsRequest;
use App\Models\User;
use App\Models\UsersGroup;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Resources\Group as GroupResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class GroupController extends Controller
{
    public $service;
    public function __construct( MailService $service)
    {
        $this->service = $service;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new GroupCollection(UsersGroup::get());
    }

    public function join(Request $request)
    {
        error_log('Im here');
        $request->validate([
            'GRP_ID' => 'required|max:255',
        ]);
        $user = Auth::user();
        if($user->GRP_JOIN != 'NO_JOIN' && $user->GRP_JOIN != 'DENY_JOIN') {
            abort(406, 'User Already a part of a group');
        }
        $group = UsersGroup::where('GRP_ID', '=', $request->GRP_ID)->firstOrFail();

        $user->group_email_verification_token = Str::random(32);
        $user->update(['group_email_verification_token']);

        // SEND EMAIL
        $this->sendJoinVerifyEmail($user, $group);
        return new GroupResource($group);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if($user->GRP_JOIN != 'NO_JOIN' && $user->GRP_JOIN != 'DENY_JOIN') {
            abort(406, 'User Already a part of a group');
        }
        $GRP_ID = 'CCCC';
        $latestUserGroup = UsersGroup::orderBy('created_at', 'desc')->first();
        if($latestUserGroup) {
            $GRP_ID = $this->getNext($latestUserGroup->GRP_ID);
        }
        $group = UsersGroup::create([
            'GRP_NAME' => $request->GRP_NAME,
            'GRP_Desc' => $request->GRP_Desc,
            'CREATOR_ID' => $user->id,
            'GRP_PASSWORD' => $request->GRP_PASSWORD,
            'GRP_ID' => $GRP_ID,
            'GRP_Activity' => true,
            'group_email_verification_token' => Str::random(32)
        ]);

        // SEND EMAIL
        $this->sendVerifyEmail($user, $group);
        return new GroupResource($group);
    }

    private function getNext(string $GRP_ID)
    {
        $last = substr($GRP_ID, 3, 1);
        $third = substr($GRP_ID, 2, 1);
        $second = substr($GRP_ID, 1, 1);
        $first = substr($GRP_ID, 0, 1);
        if ($last != 'Z') {
            $last++;
        }
        else {
            $last = 'A';
            if ($third != 'Z') {
                $third++;
            } else {
                $third = 'A';
                if ($second != 'Z') {
                    $second++;
                } else {
                    $second = 'A';
                    $first++;
                }
            }
        }
        return($first . $second . $third . $last);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function sendVerifyEmail($user, $group){
        $to_name = $user->username;
        $to_email = $user->email;
        $link = env('PROD_URL', 'http://localhost:8000')."/api/groups/verify/".$group->group_email_verification_token;
        error_log($link);
        $data = array('name'=>$user->username, "verifyLink" => $link);

        $this->service->sendTo($to_name, $to_email, $data, "emails.verifyGroupEmail", "Email verification", "Email verification");

    }

    public function sendJoinVerifyEmail($user, $group){
        error_log($user);
        $to_name = $user->username;
        $to_email = $user->email;
        $link = env('PROD_URL', 'http://localhost:8000')."/api/groups/verify_join/".$user->group_email_verification_token."?group_id=".$group->id;
        error_log($link);
        $data = array('name'=>$user->username, "verifyLink" => $link);

        $this->service->sendTo($to_name, $to_email, $data, "emails.verifyJoinGroupEmail", "Email verification", "Email verification");

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $token
     * @return \Illuminate\Http\JsonResponse
     */
    public function VerifyJoinEmail(Request $request, $token = null)
    {
        $group_id = $request->query('group_id');
        $group = UsersGroup::findOrFail($group_id);
        if($token == null) {
            return response()->json(['error' => 'Invalid Confirmation attempt'], 406);

        }
        $user = User::where('group_email_verification_token',$token)->first();
        if($user == null ){
            return response()->json(['error' => 'Invalid Confirmation attempt'], 406);
        }



        $user->group_email_verified = true;
        $user->group_email_verified_at = Carbon::now();
        $user->group_email_verification_token = '';
        $user->GRP_JOIN = 'WAIT_JOIN';
        $user->save();

        $group_request = GroupsRequest::create([
            'GRP_ID' => $group->GRP_ID,
            'USER_ID' => $user->id,
            'USER_NAME' => $user->username
        ]);

        //redirect to login page
        return redirect()->away( env('FRONT_URL', 'http://localhost:4200')  . "/#/groups");

    }

    public function VerifyEmail($token = null)
    {
        if($token == null) {
            return response()->json(['error' => 'Invalid Confirmation attempt'], 406);

        }
        $group = UsersGroup::where('group_email_verification_token',$token)->first();
        if($group == null ){
            return response()->json(['error' => 'Invalid Confirmation attempt'], 406);
        }

        $group->group_email_verified = true;
        $group->group_email_verified_at = Carbon::now();
        $group->group_email_verification_token = '';
        $group->save();

        $user = User::findOrFail($group->CREATOR_ID);
        $user->GRP_JOIN = 'CREATE_JOIN';
        $user->GRP_ID = $group->GRP_ID;
        $user->USER_GRP_ID = 0001;
        $user->save();

        //redirect to login page
        return redirect()->away( env('FRONT_URL', 'http://localhost:4200')  . "/#/groups");

    }
}
