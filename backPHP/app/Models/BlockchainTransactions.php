<?php

namespace App\Models;

use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Database\Eloquent\Model;

class BlockchainTransactions extends Model
{
    protected $fillable = ['id_transaction','amount','user_id','offer_id'];

    public function setIdTransactionAttribute($id)
    {
        if ( !empty($id) ) {
            $this->attributes['id_transaction'] = encrypt($id);
        }
    }

    public function getIdTransactionAttribute($value)
    {
        try {
            return decrypt($value);
        } catch (DecryptException $e) {
            return $e;
        }

    }

    public function setAmountAttribute($amount)
    {
        if ( !empty($amount) ) {
            $this->attributes['amount'] = encrypt($amount);
        }
    }

    public function getAmountAttribute($value)
    {
        try {
            return decrypt($value);
        } catch (DecryptException $e) {
            return $e;
        }
    }

    public function setUserIdAttribute($id)
    {
        if ( !empty($id) ) {
            $this->attributes['user_id'] = encrypt($id);
        }
    }

    public function getUserIdAttribute($value)
    {
        try {
            return decrypt($value);
        } catch (DecryptException $e) {
            return $e;
        }
    }

    public function setOfferIdAttribute($id)
    {
        if ( !empty($id) ) {
            $this->attributes['offer_id'] = encrypt($id);
        }
    }

    public function getOfferIdAttribute($value)
    {
        try {
            return decrypt($value);
        } catch (DecryptException $e) {
            return $e;
        }
    }
}
