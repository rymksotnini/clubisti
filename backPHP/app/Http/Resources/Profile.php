<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Profile extends JsonResource
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
            'phoneNumber'       => $this->phone_number,
            'gender'    => $this->gender,
            'birthDate'    => $this->birth_date,
            'imageUrl'    => $this->image_url,
            'status'    => $this->status,
            'balance'    => $this->balance,
            'totalDonatedAmount'    => $this->totalDonatedAmount,
            'user'    => $this->user,
            'badge'    => $this->badge,
            'address'    => $this->address,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
