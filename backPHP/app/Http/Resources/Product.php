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
            'large_image_path'    => $this->large_image_path,
            'small_image_path'    => $this->small_image_path,
            'long_description'    => $this->long_description,
            'short_description'    => $this->short_description,
            'total_amount'    => $this->total_amount,
            'categories'    => $this->categories,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
