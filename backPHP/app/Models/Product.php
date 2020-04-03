<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'status', 'large_image_path', 'small_image_path', 'long_description', 'short_description', 'total_amount'];


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
