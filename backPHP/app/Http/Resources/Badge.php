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
            'lower_bond'    => $this->lower_bond,
            'upper_bond'    => $this->upper_bond,
            'profiles'    => $this->profiles,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
