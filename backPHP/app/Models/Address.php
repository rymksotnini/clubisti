<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = ['city', 'street', 'street2', 'postal_code', 'country_id'];

    /**
     * Get the organisations for the address.
     */
    public function organisations()
    {
        return $this->hasMany(Organisation::class);
    }

    /**
     * Get the profiless for the address.
     */
    public function profiles()
    {
        return $this->hasMany(Profile::class);
    }

    /**
     * Get the Country that owns the address.
     */
    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
