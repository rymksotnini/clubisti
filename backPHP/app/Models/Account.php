<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    /**
     * Get the organisation that owns the account.
     */
    public function organisation()
    {
        return $this->belongsTo(Organisation::class);
    }
}
