<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Type;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
            'type' => 'required|in:admin,driver,passenger',
        ]);

        $type = DB::table('types')->where('name', $request->input('type'))->first();

        if (!$type) {
            return response()->json(['message' => 'Role not found'], 400);
        }

        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'type_id' => $type->id,
        ]);

        return response()->json(['user' => $user, 'message' => 'User registered successfully'], 201);
    }
}

