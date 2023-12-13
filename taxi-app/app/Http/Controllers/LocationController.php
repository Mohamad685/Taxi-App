<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);
    
        $location = Location::create([
            'name' => $request->input('name'),
            'location' => json_encode([
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longitude'),
            ]),
        ]);
    
        return response()->json(['location' => $location, 'message' => 'Location created successfully'], 201);
    }

    //retrieve all locations
    public function index()
    {
        $locations = Location::all();
        return response()->json(['locations' => $locations]);
    }

    //retrieve the location of a driver or passenger
    public function show($id)
    {
        $location = Location::findOrFail($id);
        return response()->json(['location' => $location]);
    }
    
    //update location
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string',
            'latitude' => 'required|numeric',
            'longitude' => 'required|numeric',
        ]);

        $location = Location::findOrFail($id);
        $location->update([
            'name' => $request->input('name'),
            'location' => json_encode([
                'latitude' => $request->input('latitude'),
                'longitude' => $request->input('longitude'),
            ]),
        ]);

        return response()->json(['location' => $location, 'message' => 'Location updated successfully']);
    }

}

