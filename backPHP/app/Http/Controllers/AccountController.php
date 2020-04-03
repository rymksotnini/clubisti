<?php

namespace App\Http\Controllers;

use App\Http\Resources\AccountCollection;
use App\Http\Resources\Account as AccountResource;
use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index()
    {
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
        $account->delete();

        return response()->json(null, 204);
    }

}
