<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Request as RideRequest;
use App\Models\Location;
use App\Models\User;
use App\Models\Ride;

class RequestController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'passenger_id' => 'required|exists:users,id',
            'driver_id' => 'required|exists:users,id',
            'location_id' => 'required|exists:locations,id',
        ]);

        $passenger = User::findOrFail($request->input('passenger_id'));
        $driver = User::findOrFail($request->input('driver_id'));

        if (!$passenger->isPassenger()) {
            return response()->json(['error' => 'Invalid request'], 400);
        }

        $rideRequest = RideRequest::create([
            'passenger_id' => $request->input('passenger_id'),
            'driver_id' => $request->input('driver_id'),
            'location_id' => $request->input('location_id'),
            'status' => 'pending',
        ]);

        return response()->json(['request' => $rideRequest, 'message' => 'Ride request created successfully'], 201);
    }

    public function updateStatus(Request $request, $requestId)
    {
        $request->validate([
            'status' => 'required|in:accepted,cancelled',
        ]);

        $rideRequest = RideRequest::findOrFail($requestId);

        $driver = $request->user();

        if (!$driver->isDriver() || $rideRequest->driver_id !== $driver->id) {
            return response()->json(['error' => 'Unauthorized to update the status of this request'], 403);
        }

        // Update the status of the ride request
        $rideRequest->update([
            'status' => $request->input('status'),
        ]);

        if ($request->input('status') === 'accepted') {
            // Create a new record in the rides table
            Ride::create([
                'request_id' => $rideRequest->id,
                'driver_id' => $driver->id,
                'passenger_id' => $rideRequest->passenger_id,
                'ride_date' => now(), 
                'ride_status' => 'accepted',
            ]);
        }

        return response()->json(['message' => 'Ride request status updated successfully'], 200);
    }

}
