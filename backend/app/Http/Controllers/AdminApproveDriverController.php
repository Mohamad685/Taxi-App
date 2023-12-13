<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Type;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Models\PendingDriver;
use App\Models\Driver;

class AdminApproveDriverController extends Controller
{
    public function acceptDriver(Request $request, $pendingDriverId)
    {
        // Validate the request, check if the authenticated user is an admin, etc.
        $user = auth()->user();

        if (!$user || !$user->isAdmin()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $pendingDriver = PendingDriver::findOrFail($pendingDriverId);
        // Create a driver record
        $driver = Driver::create([
            'user_id' => $pendingDriver->user_id,
            'license' => $pendingDriver->license,
            'status' => 'busy', 
        ]);

        $pendingDriver->delete();
        return response()->json(['driver' => $driver, 'message' => 'Driver accepted successfully']);
    }

    public function rejectDriver(Request $request, $pendingDriverId)
    {
        // Validate the request, check if the authenticated user is an admin, etc.
        $user = auth()->user();

        if (!$user || !$user->isAdmin()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $pendingDriver = PendingDriver::findOrFail($pendingDriverId);
        $pendingDriver->delete();
        return response()->json(['message' => 'Driver rejected successfully']);
        
    }
}


