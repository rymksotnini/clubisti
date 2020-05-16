<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Offer extends JsonResource
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
            'deleted'    => $this->deleted,
            'name'       => $this->name,
            'shortDescription'       => $this->short_description,
            'longDescription' => $this->long_description,
            'categories'    => $this->categories,
            'amount' => $this->amount,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'largeImagePath' => $this->large_image_path,
            'shortImagePath' => $this->short_image_path,

        ];
    }
}
