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
            'phone_umber'       => $this->phone_umber,
            'gender'    => $this->gender,
            'birth_date'    => $this->birth_date,
            'image_url'    => $this->image_url,
            'status'    => $this->status,
            'user'    => $this->user,
            'badge'    => $this->badge,
            'address'    => $this->address,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
