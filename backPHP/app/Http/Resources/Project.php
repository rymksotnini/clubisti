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
            'short_description'       => $this->short_description,
            'last_updated_sum'       => $this->last_updated_sum,
            'amount'       => $this->amount,
            'max_donation_amount'       => $this->max_donation_amount,
            'min_donation_amount'       => $this->min_donation_amount,
            'status'       => $this->status,
            'categories'    => $this->categories,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
