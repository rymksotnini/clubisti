<?php

namespace App\Http\Resources;
use App\Http\Resources\Offer as OfferResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectMV extends JsonResource
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
            'id'              => $this->id,
            'lastUpdatedSum'       => $this->last_updated_sum,
            'maxDonationAmount'       => $this->max_donation_amount,
            'minDonationAmount'       => $this->min_donation_amount,
            'status'       => $this->status,
            'contribution' => $this->contribution,
            'startDate' => $this->start_date,
            'endDate'   => $this->end_date,
            'offer' => OfferResource::make($this->offer),
        ];
    }
}
