<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsersGroup extends Model
{
    protected $fillable = ['GRP_NAME', 'GRP_ID', 'GRP_Desc', 'CREATOR_ID', 'GRP_PASSWORD', 'GRP_Activity', 'group_email_verification_token'];

    public function creator()
    {
        return $this->belongsTo(User::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
