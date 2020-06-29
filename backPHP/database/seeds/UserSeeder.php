<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'email_verification_token' => 'EuPAgxi4LLA2S4i5nUu8bHZHICLbSTQA',
            'password' => Hash::make('admin'),
            'email_verified' => true,
            'role' => 'ADMIN',
        ]);
        DB::table('users')->insert([
            'username' => 'user1',
            'email' => 'user1@gmail.com',
            'email_verification_token' => 'EuPAgxi4LLA2S4i5nUu8bHZHICLbSTQG',
            'password' => Hash::make('user1'),
            'email_verified' => true,
            'role' => 'USER',
        ]);
    }
}
