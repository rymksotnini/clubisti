<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
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
            'status'    => $this->status,
            'largeImagePath'    => $this->large_image_path,
            'smallImagePath'    => $this->small_image_path,
            'longDescription'    => $this->long_description,
            'shortDescription'    => $this->short_description,
            'totalAmount'    => $this->total_amount,
            'categories'    => $this->categories,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
