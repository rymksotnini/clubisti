<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OfferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('offers')->insert([
            'name' => 'First Project',
            'short_description' => 'short description',
            'long_description' => 'long description',
            'amount' => 10000,
        ]);

        DB::table('category_offer')->insert([
            'category_id' => 1,
            'offer_id' => 1
        ]);
    }
}
