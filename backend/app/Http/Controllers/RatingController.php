<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;
use App\Models\User;
use App\Models\Ride;

class RatingController extends Controller
{
    public function rateUser(Request $request, $ratedUserId)
    {
        $request->validate([
            'rating' => 'required|integer|between:1,5',
            'comment' => 'nullable|string|max:255', 
        ]);
    
        $user = $request->user();
    
        if (!$user->isPassenger() && !$user->isDriver()) {
            return response()->json(['error' => 'Unauthorized to rate'], 403);
        }
    
        $ratedUser = User::findOrFail($ratedUserId);
    
        // Check if there is a ride associated with the users
        $ride = Ride::where(function ($query) use ($user, $ratedUser) {
            $query->where('driver_id', $user->id)->where('passenger_id', $ratedUser->id);
        })->orWhere(function ($query) use ($user, $ratedUser) {
            $query->where('driver_id', $ratedUser->id)->where('passenger_id', $user->id);
        })->first();
    
        if (!$ride) {
            return response()->json(['error' => 'Unauthorized to rate. Users must have a associated ride.'], 403);
        }
    
        Rating::create([
            'user_id' => $user->id,
            'rated_user_id' => $ratedUser->id,
            'rating' => $request->input('rating'),
            'comment' => $request->input('comment'),
        ]);
    
        return response()->json(['message' => 'Rating recorded successfully'], 200);
    }   
    
    public function getAverageRating($ratedUserId)
    {
        $ratedUser = User::findOrFail($ratedUserId);
        $ratings = Rating::where('rated_user_id', $ratedUser->id)->get();

        if ($ratings->isEmpty()) {
            return response()->json(['average_rating' => null, 'message' => 'No ratings available for this user'], 200);
        }
        
        $totalRating = $ratings->sum('rating');
        $averageRating = $totalRating / $ratings->count();

        return response()->json(['average_rating' => $averageRating], 200);
    }
}