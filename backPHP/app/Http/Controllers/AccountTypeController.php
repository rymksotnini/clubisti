<?php

namespace App\Http\Controllers;

use App\AccountType;
use App\Http\Resources\AccountTypeCollection;
use App\Http\Resources\AccountType as AccountTypeResource;
use Illuminate\Http\Request;

class AccountTypeController extends Controller
{

    public function index()
    {
        return new AccountTypeCollection(AccountType::get());
    }

    public function store(Request $request)
    {
        $accountType = AccountType::create($request->all());

        return (new AccountTypeResource($accountType))
            ->response()
            ->setStatusCode(201);
    }

    public function show($id)
    {
        return new AccountTypeResource(AccountType::findOrFail($id));
    }

    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'required|max:255',
        ]);
        $accountType = AccountType::findOrFail($id);
        $accountType->update($request->all());

        return (new AccountTypeResource($accountType))
            ->response()
            ->setStatusCode(201);
    }

    public function delete($id)
    {
        $accountType = AccountType::findOrFail($id);
        $accountType->delete();

        return response()->json(null, 204);
    }
}
