<?php

namespace App\Http\Controllers;

use App\Models\Complain;
use App\Models\Transaction;
use App\Models\User;

use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Complain as ComplainResource;
use Illuminate\Http\Request;

class ComplainController extends Controller
{
    public function index(Request $request)
    {

        if ($request->page  && $request->perPage){
            return new ComplainCollection(Complain::paginate($request->perPage));
        }else if ($request->page ){
            return new ComplainCollection(Complain::paginate(3));
        }
        return new ComplainCollection(Complain::get());
    }


    public function show($id)
    {
        return new ComplainResource(Complain::findOrFail($id));
    }

    public function store(Request $request)
    {
        $transaction = Transaction::findOrFail($request->transactionId);
        $user = User::findOrFail(Auth::user()->id);
        // check if reason AE and current user not the owner of the transaction return error
        if (($transaction->user->id != $user->id) && ($request->reason == "AE")){
        return response()->json("Only the initiate of transaction can post an amount error",406);

        }
        $complain = new Complain;
        $complain->body = $request->body;
        $complain->reason = $request->reason;
        $complain->status = "PENDING";
        $transaction->complains()->save($complain);
        $user->complains()->save($complain);
        return (new ComplainResource($complain))
            ->response()
            ->setStatusCode(201);
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $complain = Complain::findOrFail($id);
        $complain->update($request->all());

        return (new ComplainResource($complain))
            ->response()
            ->setStatusCode(201);
    }

    public function delete($id)
    {
        $complain = Complain::findOrFail($id);
        if($complain) {
            $complain->deleted = true;
            $complain->save();
        }

        return response()->json(null, 204);
    }
    public function deleteFinal($id)
    {
        $complain = Complain::findOrFail($id);
        $complain->delete();

        return response()->json(null, 204);
    }
}
