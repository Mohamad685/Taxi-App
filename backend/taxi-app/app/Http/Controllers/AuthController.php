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
            'img_url' => 'sometimes|string',
            'invitation_code' => 'sometimes|required_if:type,admin|exists:users,invitation_code',
        ]);
    
        $type = DB::table('types')->where('name', $request->input('type'))->first();
    
        if (!$type) {
            return response()->json(['message' => 'Role not found'], 400);
        }
    
        // Check if the user is registering as an admin
        if ($request->input('type') === 'admin') {
            $invitationCode = $request->input('invitation_code');
    
            if (!$invitationCode || !User::where('invitation_code', $invitationCode)->exists()) {
                return response()->json(['error' => 'Invalid or missing invitation code for admin registration'], 403);
            }
        }
    
        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'type_id' => $type->id,
            'img_url' => $request->input('img_url'),
        ]);
    
        return response()->json(['user' => $user, 'message' => 'User registered successfully'], 201);
    }
        

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = JWTAuth::fromUser($user);

            return response()->json(['token' => $token]);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);

    }
}

