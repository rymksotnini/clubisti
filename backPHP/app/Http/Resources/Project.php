<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Project extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'shortDescription'       => $this->short_description,
            'lastUpdatedSum'       => $this->last_updated_sum,
            'amount'       => $this->amount,
            'maxDonationAmount'       => $this->max_donation_amount,
            'minDonationAmount'       => $this->min_donation_amount,
            'status'       => $this->status,
            'categories'    => $this->categories,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
