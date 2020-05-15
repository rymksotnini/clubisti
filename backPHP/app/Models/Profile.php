<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = ['phone_number', 'gender', 'birth_date', 'image_url', 'status','balance','totalDonatedAmount', 'user_id', 'badge_id', 'address_id' ];

    /**
     * Get the user that owns the profile.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the badge that owns the profile.
     */
    public function badge()
    {
        return $this->belongsTo(Badge::class);
    }

    /**
     * Get the address that owns the profile.
     */
    public function address()
    {
        return $this->belongsTo(Address::class);
    }
}
