<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            'last_updated_sum' => 0,
            'start_date' => '2020-06-09',
            'end_date' => '2020-06-09',
            'offer_id' => 1,
            'max_donation_amount' => 100000,
            'min_donation_amount' => 0,
            'status' => 'CREATED',
        ]);
    }
}
