<?php

namespace App\Http\Controllers;

use App\Models\AccountType;
use App\Http\Resources\AccountCollection;
use App\Http\Resources\Account as AccountResource;
use App\Models\Account;
use App\Models\Organisation;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index(Request $request)
    {
        error_log("heeeere");
        if ($request->page  && $request->perPage){
            return new AccountCollection(Account::paginate($request->perPage));
        }else if ($request->page ){
            return new AccountCollection(Account::paginate(3));
        }
        return new AccountCollection(Account::get());
    }

    public function show($id)
    {
        return new AccountResource(Account::findOrFail($id));
    }

    public function store(Request $request)
    {
        $account = Account::create($request->all());

        return (new AccountResource($account))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $account = Account::findOrFail($id);
        $account->update($request->all());

        return (new AccountResource($account))
            ->response()
            ->setStatusCode(201);
    }

    public function delete($id)
    {
        $account = Account::findOrFail($id);
        if($account) {
            $account->deleted = true;
            $account->save();
        }

        return response()->json(null, 204);
    }

    public function deleteFinal($id)
    {
        $account = Account::findOrFail($id);
        $account->delete();

        return response()->json(null, 204);
    }

    public function createOrUpdateWithAccountType(Request $request, $id){
        $organization = Organisation::find($id);
        if(!$organization){
            return response()->json("non existent organization",406);
        }
        if($request->input('organization')){
            $organization=$organization->update($request->input('organization'));
        }

        $account = Account::updateOrCreate(
            ['account_number' => $request->input('account.account_number')]
        );
        // set default if first account
        if(count(Account::all())==1){
            $account->default = true;
        }
        //when updating account must delete
        $account->organisation()->associate($organization);
        $account->save();

        $accountType=AccountType::updateOrCreate($request->input('accountType'));
        $account->accountType()->associate($accountType);
        $account->save();

        return (new AccountResource($account))
            ->response()
            ->setStatusCode(201);
    }

    public function getDefault(){
        error_log("here");
        $defaultAccount = Account::where('default',true)->first();
        error_log($defaultAccount->account_number);
        return new AccountResource($defaultAccount);
    }

    public function setAccountAsDefault($id){
        $newDefaultAccount = Account::find($id);
        $oldDefaultAccount = Account::where('default',true)->first();
        $newDefaultAccount->default = true;
        $oldDefaultAccount->default = false;
        $newDefaultAccount->save();
        $oldDefaultAccount->save();
        return response()->json(null, 201);
    }
}
