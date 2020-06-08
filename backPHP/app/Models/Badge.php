<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
    protected $fillable = ['name', 'lower_bond', 'upper_bond', 'icon', 'color'];

    /**
     * Get the profiles for the badge.
     */
    public function profiles()
    {
        return $this->hasMany(Profile::class);
    }
}
