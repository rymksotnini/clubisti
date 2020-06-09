<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AccountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('accounts')->insert([
            'account_number' => '0000',
            'default' => true,
            'organisation_id' => 1,
            'account_type_id' => 1,
        ]);
    }
}
