<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionCollection;
use App\Models\Badge;
use App\Models\BlockchainTransactions;
use App\Models\Complain;
use App\Models\Offer;
use App\Models\User;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Transaction as TransactionResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    public function index()
    {
        return new TransactionCollection(Transaction::get());
    }

    public function indexGroupeBy()
    {
        $currentUserId = Auth::user()->id;
        $tr = DB::select( DB::raw("
             SELECT offer_id as projectId,sum(amount) as contribution
             FROM transactions
             where user_id = :userId
             GROUP BY offer_id;"), array(
            'userId' => $currentUserId,
        ));
       // $tr = Transaction::select('offer_id', 'amount')->where('user_id', 2)->groupBy('offer_id')->get();
        return $tr;
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
        error_log($request);
        $currentUser = User::find($request->input('user.id'));
        $currentOffer = Offer::find($request->input('offer.id'));
        $currentAccount = User::find($request->input('account.id'));
        $currentProject = $currentOffer->project;
        if($currentUser->profile->balance < (double)$request->input('transaction.amount')){
            return response()->json("Current balance not sufficient",406);
        }
        $currentProfile=$currentUser->profile;
        // test if total exceeds the amount of the offer
        if($currentProject->last_updated_sum + (double)$request->input('transaction.amount')>$currentOffer->amount){
            return response()->json("Offer requested amount exceeded",405);
        }
        // save transaction
        if(Transaction::where('offer_id',$request->input('offer.id'))->first()==null){
            $transaction=Transaction::create(["amount"=>$request->input('transaction.amount'),"newTotal"=>$request->input('transaction.amount')]);
        }
        else{
            $lastTransaction = Transaction::where('offer_id',$request->input('offer.id'))->latest()->first();
            $transaction=Transaction::create(["amount"=>$request->input('transaction.amount'),"newTotal"=>(double)$request->input('transaction.amount')+$lastTransaction->newTotal]);
        }
        // modify profile accordingly
        $currentProfile->balance = $currentProfile->balance - (double)$request->input('transaction.amount');
        $currentProfile->totalDonatedAmount = $currentProfile->totalDonatedAmount + (double)$request->input('transaction.amount');
        $currentProject->last_updated_sum = $currentProject->last_updated_sum + (double)$request->input('transaction.amount');
        if($currentProject->last_updated_sum == $currentOffer->amount){
            $currentProject->status = 'TERMINATED';
        }
        $currentProject->save();
        //badge update
        $currentBadge=$currentProfile->badge;
        if ((double)$currentBadge->upper_bond < (double)$currentProfile->totalDonatedAmount) {
            $badge = Badge::find($currentBadge->id + 1);
            if ($badge){
                $currentProfile->badge()->associate($badge);
            }
        }
        //end badge update
        $currentProfile->save();
        $transaction->account()->associate($currentAccount);
        $transaction->save();
        $transaction->offer()->associate($currentOffer);
        $transaction->save();
        $transaction->user()->associate($currentUser);
        $transaction->save();
        $lastTransaction = Transaction::all()->last();
        error_log($lastTransaction->id);
        // add to the blockchain transaction table
        BlockchainTransactions::create(["id_transaction"=>$lastTransaction->id,"amount"=>$lastTransaction->amount,"offer_id"=>$lastTransaction->offer_id,"user_id"=>$lastTransaction->user_id]);
        if(BlockchainTransactions::all()->count()>=10){
           $result = $this->prepareForBlockchain(BlockchainTransactions::orderBy('id')->get());
           $groupId = round((BlockchainTransactions::find(1)->id_transaction)/10) ;
           error_log($groupId);
           BlockchainTransactions::truncate();
           return response()->json(['result'=> $result,'groupId'=> $groupId], 201);
        }
        return (new TransactionResource($transaction))
            ->response()
            ->setStatusCode(201);
    }

    public function verifyTransaction(Request $request,$id){
        $localTransaction = Transaction::find($id);
        $transactionsString = $request->input('transactions');
        $currentComplaint = Complain::findOrFail($request->input('complaint.id'));
        $transactionsString = explode("0x", $transactionsString);
        $transactionsString = $transactionsString[1];
        error_log($transactionsString);
        $transactions = explode(";",$transactionsString);
        foreach($transactions as $transaction){
            list($id_transaction, $user_id, $offer_id, $amount) = explode(",",$transaction);
            if(strcmp($id,$id_transaction)==0){
                $blockchainTransaction = new Transaction();
                $blockchainTransaction->id_transaction = $id_transaction;
                $blockchainTransaction->user_id = $user_id;
                $blockchainTransaction->offer_id = $offer_id;
                $blockchainTransaction->amount = $amount;
                $localTransactionString = $localTransaction->id_transaction .",".$localTransaction->user_id.",".$localTransaction->offer_id.",".$localTransaction->amount;
                if (strcmp($transaction,$localTransactionString)==0){
                    $verified = true;
                    $currentComplaint->status = "REFUSED";
                }
                else{
                    $verified = false;
                    $localTransaction->update($blockchainTransaction);
                    $currentComplaint->status = "ACCEPTED";
                }
                $currentComplaint->save();
                return response()->json(['verified'=> $verified,'localTransaction'=> $localTransaction,'blockchainTransaction'=>$blockchainTransaction], 201);
            }
        }
        return response()->json("transaction not existent in Blockchain", 405);
    }

    public function getPerUser($id){
        // check connected id is the same $id
        if (Auth::User()->id == $id){
            $currentUser = User::findOrFail($id);
            return new TransactionCollection($currentUser->transactions()->get());
        }
        return response()->json("Not Authorized", 406);
    }

     public function getPerOffer($id){
            $offer = Offer::findOrFail($id);
            if ( !$offer){ return response()->json("Project with id "+ $id+ " not found" ,406);}
            return new TransactionCollection($offer->transactions()->get());
    }

    /**
     * prepare the bytes to be sent to angular and passed to the blockchain
    **/
    protected function prepareForBlockchain($transactions){
        $result = "";
        // idT,idU,idO,amount;
        foreach ($transactions as  $transaction){
            $result = $result.$transaction->id_transaction .",".$transaction->user_id.",".$transaction->offer_id.",".$transaction->amount. ";";
        }
        return "0x".bin2hex($result);
    }

}
