<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Driver;
use App\Models\PendingDriver;
use App\Models\Ride;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function getUsersAndRidesNumber()
    {
        $userCounts = User::select('type_id', DB::raw('COUNT(*) as count'))
            ->groupBy('type_id')
            ->get();

        $totalUsersCount = User::count();
        $ridesCount = Ride::count();

        return response()->json(['users' => $userCounts, 'allUsers' => $totalUsersCount, 'rides' => $ridesCount]);
    }
    public function getAllUsers()
    {
        $user = Auth::user();

        if ($user->type_id == 457789) {
            $users = User::all();

            if (!$users) {
                return response()->json([
                    'users' => 'No Users Found'
                ]);
            }
            return response()->json([
                'users' => $users
            ]);
        }
        return response()->json([
            'status' => "Unauthorized"
        ], 401);
    }

    public function deleteUser(Request $request)
    {
        $current_user = Auth::user();
        if ($current_user->type_id == 457789) {
            $user = User::where('id', $request->user_id)->first();

            if ($user->type_id == 452156) {
                $driver = Driver::where('user_id', $request->user_id)->first();
                if ($driver) {
                    $driver->delete();
                }
                $driver_pending = PendingDriver::where('user_id', $request->user_id)->first();
                if ($driver_pending) {
                    $driver_pending->delete();
                }
            }
            if ($user) {
                $user->delete();
            }

            return response()->json([
                'status' => 'User Deleted',
            ], 200);
        }
        return response()->json([
            'status' => 'Not authorized',
        ], 401);
    }
}
