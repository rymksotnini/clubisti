<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Complain extends Model
{
    protected $fillable = ['reason', 'body','status' ,'document'];

    /**
     * Get the transaction that owns the complain.
     */
    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }
}
