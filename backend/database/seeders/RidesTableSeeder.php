<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class RidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rides')->insert([
            'request_id' => 2,
            'driver_id' => 28,
            'passenger_id' => 29,
            'ride_date' => now(), 
            'ride_status' => 'accepted', 
        ]);
    }
}
