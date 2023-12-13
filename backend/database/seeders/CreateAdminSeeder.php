<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
class CreateAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'first_name' => 'ali',
            'last_name' => 'safa',
            'email' => 'ali@taxiapp.com',
            'password' => Hash::make('password123'),
            'type_id' => 1,
            'img_url' => 'img.com',
            'invitation_code' => Str::random(32),
        ]);
    }
}
