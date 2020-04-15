<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
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
            'username'   => $this->username,
            'firstName'  => $this->first_name,
            'lastName'   => $this->last_name,
            'email'      => $this->email,
            'password'   => $this->password,
            'deleted'    => $this->deleted,
            'createdAt'  => $this->created_at,
            'updatedAt'  => $this->updated_at,
        ];
    }
}
