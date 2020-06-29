<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            BadgeSeeder::class,
            ProfileSeeder::class,
            OrganisationSeeder::class,
            AccountTypeSeeder::class,
            AccountSeeder::class,
            CategorySeeder::class,
            OfferSeeder::class,
            ProjectSeeder::class,
        ]);
    }
}
