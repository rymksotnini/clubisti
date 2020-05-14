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
            'name'       => $this->name,
            'shortDescription'       => $this->short_description,
            'categories'    => $this->categories,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
            'large_image_path' => $this->large_image_path,
            'short_image_path' => $this->short_image_path,
            'deleted'    => $this->deleted,
        ];
    }
}
