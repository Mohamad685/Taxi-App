<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Driver;
use App\Models\PendingDriver;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function getAllUsers()
    {
        $user = Auth::user();

        if ($user->type_id == 1) {
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
        if ($current_user->type_id == 1) {
            $user = User::where('id', $request->user_id)->first();
            if ($user) {
                $user->delete();
            }

            if ($user->type_id == 2) {
                $driver = Driver::where('user_id', $request->user_id)->first();
                if ($driver) {
                    $driver->delete();
                }
                $driver_pending = PendingDriver::where('user_id', $request->user_id)->first();
                if($driver_pending){
                    $driver_pending->delete();
                }
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
