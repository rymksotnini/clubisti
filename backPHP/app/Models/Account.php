<?php

namespace App\Models;

use App\AccountType;
use App\Transaction;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{

    protected $fillable = ['account_number'];

    /**
     * Get the organisation that owns the account.
     */
    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }

    /**
     * Get the accountType that owns the account.
     */
    public function accountType()
    {
        return $this->belongsTo(AccountType::class);
    }

    /**
     * Get the transactions for the account.
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
