<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Address extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return [
            'id'         => $this->id,
            'city'       => $this->city,
            'street'     => $this->street,
            'street2'    => $this->street2,
            'postalCode' => $this->postal_code,
            'country'    => $this->country,
            'organisations' => $this->organisations,
            'profiles' => $this->profiles,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];

    }
}
