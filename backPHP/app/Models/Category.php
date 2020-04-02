<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name', 'type'];

    /**
     * Get the products for the category.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    /**
     * Get the projects for the category.
     */
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
