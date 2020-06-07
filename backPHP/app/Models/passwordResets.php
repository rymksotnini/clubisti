<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class passwordResets extends Model
{
    protected $fillable = ['email', 'token'];

    protected $hidden = [
        'token'
    ];

}
