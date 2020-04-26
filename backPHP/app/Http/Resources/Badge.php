<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Badge extends JsonResource
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
            'lowerBond'    => $this->lower_bond,
            'upperBond'    => $this->upper_bond,
            'profiles'    => $this->profiles,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'deleted'    => $this->deleted,
        ];
    }
}
