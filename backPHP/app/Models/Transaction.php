<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = ['amount','newTotal'];

    /**
     * Get the account that owns the transaction.
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    /**
     * Get the user that owns the transaction.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the offer that owns the transaction.
     */
    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }
    /**
     * Get the complain for the transaction.
     */
    public function complains()
    {
        return $this->hasMany(Complain::class);
    }
}
