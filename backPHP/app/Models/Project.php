<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['last_updated_sum', 'max_donation_amount', 'min_donation_amount', 'status','offer_id',
        'start_date', 'end_date'];



    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }
}
