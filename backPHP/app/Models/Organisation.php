<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organisation extends Model
{
    protected $fillable = ['name', 'description', 'address_id'];

    /**
     * Get the accounts for the organisation.
     */
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    /**
     * Get the address that owns the organisation.
     */
    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
