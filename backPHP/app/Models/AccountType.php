<?php

namespace App;

use App\Models\Account;
use Illuminate\Database\Eloquent\Model;

class AccountType extends Model
{
    protected $fillable = ['name'];
    /**
     * Get the accounts for the accountType.
     */
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }
}
