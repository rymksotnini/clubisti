<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Country extends JsonResource
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
            'name'       => $this->name,
            'addresses'  => $this->addresses,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
