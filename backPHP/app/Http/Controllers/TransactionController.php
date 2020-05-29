<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionCollection;
use App\Models\Badge;
use App\Models\Offer;
use App\Models\User;
use App\Models\Transaction;
use App\Http\Resources\Transaction as TransactionResource;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index()
    {
        return new TransactionCollection(Transaction::get());
    }

    public function store(Request $request)
    {
        $accountType = Transaction::create($request->all());

        return (new TransactionResource($accountType))
            ->response()
            ->setStatusCode(201);
    }

    public function show($id)
    {
        return new TransactionResource(Transaction::findOrFail($id));
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $accountType = Transaction::findOrFail($id);
        $accountType->update($request->all());

        return (new TransactionResource($accountType))
            ->response()
            ->setStatusCode(201);
    }

    public function delete($id)
    {
        $accountType = Transaction::findOrFail($id);
        $accountType->delete();

        return response()->json(null, 204);
    }

    public function create(Request $request){
        $currentUser = User::find($request->input('user.id'));
        $currentOffer = Offer::find($request->input('offer.id'));
        $currentAccount = User::find($request->input('account.id'));
        $currentProject = $currentOffer->project;
        if($currentUser->profile->balance < (double)$request->input('transaction.amount')){
            return response()->json("Current balance not sufficient",406);
        }
        if(Transaction::where('offer_id',$request->input('offer.id'))->first()==null){
            error_log("hello1");
            $transaction=Transaction::create(["amount"=>$request->input('transaction.amount'),"newTotal"=>$request->input('transaction.amount')]);
        }
        else{
            error_log("hello2");
            $lastTransaction = Transaction::where('offer_id',$request->input('offer.id'))->latest()->first();
            $transaction=Transaction::create(["amount"=>$request->input('transaction.amount'),"newTotal"=>(double)$request->input('transaction.amount')+$lastTransaction->newTotal]);
        }
        $currentProfile=$currentUser->profile;
        $currentProfile->balance = $currentProfile->balance - (double)$request->input('transaction.amount');
        $currentProfile->totalDonatedAmount = $currentProfile->totalDonatedAmount + (double)$request->input('transaction.amount');
        $currentProject->last_updated_sum = $currentProject->last_updated_sum + (double)$request->input('transaction.amount');
        if($currentProject->last_updated_sum >= $currentOffer->amount){
            $currentProject->status = 'TERMINATED';
        }
        $currentProject->save();
        //badge update
        $currentBadge=$currentProfile->badge;
        error_log($currentBadge->upper_bond);
        error_log($currentProfile->totalDonatedAmount);
        if ((double)$currentBadge->upper_bond < (double)$currentProfile->totalDonatedAmount) {
            $badge = Badge::find($currentBadge->id + 1);
            $currentProfile->badge()->associate($badge);
        }
        //end badge update
        $currentProfile->save();
        $transaction->account()->associate($currentAccount);
        $transaction->save();
        $transaction->offer()->associate($currentOffer);
        $transaction->save();
        $transaction->user()->associate($currentUser);
        $transaction->save();
        return (new TransactionResource($transaction))
            ->response()
            ->setStatusCode(201);
    }

    public function getPerUser($id){
        $currentUser = User::findOrFail($id);
        return new TransactionCollection($currentUser->transactions()->get());
    }

}
