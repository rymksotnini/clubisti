<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'short_description', 'last_updated_sum', 'amount', 'max_donation_amount', 'min_donation_amount', 'status'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
