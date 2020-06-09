<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BadgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('badges')->insert([
            'name' => 'Beginner',
            'icon' => 'icon1.png',
            'color' => '#ffffff',
            'lower_bond' => '0',
            'upper_bond' => '100',
        ]);
        DB::table('badges')->insert([
            'name' => 'intermediate',
            'icon' => 'icon2.png',
            'color' => '#3f7a89',
            'lower_bond' => '101',
            'upper_bond' => '200',
        ]);

    }
}
