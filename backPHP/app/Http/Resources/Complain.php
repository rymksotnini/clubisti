<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Complain extends JsonResource
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
            'body'       => $this->body,
            'reason'    => $this->reason,
            'transaction'    => $this->transaction,
            'document' => $this->document,
            'user'    => $this->user,
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
             'status'    => $this->status,
        ];

    }
}
