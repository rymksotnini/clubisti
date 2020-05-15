<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Project;
use App\Transaction;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = ['name', 'amount', 'short_description','long_description', 'large_image_path','short_image_path'];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
    public function project()
    {
        return $this->hasOne(Project::class);
    }

    /**
     * Get the transactions for the offer.
     */
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
}
