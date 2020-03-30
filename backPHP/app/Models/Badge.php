<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
    /**
     * Get the profiles for the badge.
     */
    public function profiles()
    {
        return $this->hasMany(Profile::class);
    }
}
