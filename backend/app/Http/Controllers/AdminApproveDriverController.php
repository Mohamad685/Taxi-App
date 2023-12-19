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

    public function getDriversRequests()
    {
        if (Auth::user()->type_id == 457789) {
            $requests = PendingDriver::all();
            return response()->json(['requests' => $requests], 200);
        }
        return response()->json(['status' => 'Unauthorised'] , 401);

    }
    public function acceptDriver(Request $request, $pendingDriverId)
    {
        // Validate the request, check if the authenticated user is an admin, etc.
        $user = auth()->user();

        // if (!$user || !$user->isAdmin()) {
        //     return response()->json(['error' => 'Unauthorized'], 403);
        // }

        if (!$user || !$user->type_id == 2) {
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

        // if (!$user || !$user->isAdmin()) {
        //     return response()->json(['error' => 'Unauthorized'], 403);
        // }

        if (!$user || !$user->type_id == 2) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
        
        $pendingDriver = PendingDriver::findOrFail($pendingDriverId);
        $pendingDriver->delete();
        return response()->json(['message' => 'Driver rejected successfully']);
    }
}
