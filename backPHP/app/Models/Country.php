<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $fillable = ['name'];

    /**
     * Get the addresses for the country.
     */
    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
