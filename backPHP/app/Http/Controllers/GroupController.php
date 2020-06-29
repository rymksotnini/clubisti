<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupCollection;
use App\Mail\MailService;
use App\Models\GroupsRequests;
use App\Models\User;
use App\Models\UsersGroup;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Resources\Group as GroupResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
     * @return GroupCollection
     */
    public function index()
    {
        return new GroupCollection(UsersGroup::where('group_email_verified', '=', true)->get());
    }

    public function join(Request $request)
    {
        $request->validate([
            'GRP_ID' => 'required|max:255',
            'GRP_PASSWORD' => 'required|max:255'
        ]);
        $user = Auth::user();
        if($user->GRP_JOIN != 'NO_JOIN' && $user->GRP_JOIN != 'DENY_JOIN') {
            abort(406, 'User Already a part of a group');
        }
        $group = UsersGroup::where('GRP_ID', '=', $request->GRP_ID)->first();
        if(!$group) {
            abort(406, 'Wrong Group ID');
        }
        if (!Hash::check($request->GRP_PASSWORD, $group->GRP_PASSWORD)) {
            abort(406, 'Wrong Group Password');
        }

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
            'GRP_PASSWORD' =>Hash::make($request->GRP_PASSWORD),
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
        return UsersGroup::where('GRP_ID',$id)->first();
    }

    public function users($id) {
        return User::where('GRP_ID',$id)->where('GRP_JOIN', 'MEMBER_JOIN')->get();
    }

    public function invitations($id) {
        return GroupsRequests::where('GRP_ID',$id)->get();
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
        $user->GRP_ID = $group->GRP_ID;
        $user->save();

        $group_request = GroupsRequests::create([
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function accept(Request $request) {
        $groups_request_id = $request->groups_request_id;
        $groups_request = GroupsRequests::findOrFail($groups_request_id);
        if($groups_request) {
            $user = User::findOrFail($groups_request->USER_ID);
            $group = DB::table('users_groups')
                ->where('GRP_ID', $groups_request->GRP_ID)->first();
            $user->GRP_JOIN = 'MEMBER_JOIN';
            $user->GRP_ID = $group->GRP_ID;
            $latestUser = DB::table('users')
                ->where('GRP_ID', $group->GRP_ID)
                ->orderBy('created_at', 'desc')
                ->first();
            $user->USER_GRP_ID = ($latestUser->USER_GRP_ID + 1);
            $user->save();
            $groups_request->delete();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deny(Request $request) {
        $groups_request_id = $request->groups_request_id;
        $groups_request = GroupsRequests::find($groups_request_id);
        if(!$groups_request) {
            abort(406, 'Group Request Wrong');
        }
        if($groups_request) {
            $user = User::findOrFail($groups_request->USER_ID);
            $group = DB::table('users_groups')
                ->where('GRP_ID', $groups_request->GRP_ID)->first();
            $user->GRP_JOIN = 'DENY_JOIN';
            $user->save();
            $groups_request->delete();
        }
    }

    public function leave() {
        $user = Auth::user();
        $user->USER_GRP_ID = 0000;
        $user->GRP_ID = null;
        $user->GRP_JOIN = 'NO_JOIN';
        $user->update(['USER_GRP_ID', 'GRP_ID', 'GRP_JOIN']);
        $groups_request = DB::table('groups_requests')
            ->where('USER_ID', $user->id)->delete();
    }
}
