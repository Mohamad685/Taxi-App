<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;
use App\Models\User;

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

        Rating::create([
            'user_id' => $user->id,
            'rated_user_id' => $ratedUser->id,
            'rating' => $request->input('rating'),
            'comment' => $request->input('comment'),
        ]);

        return response()->json(['message' => 'Rating recorded successfully'], 200);
    }

    public function getAverageRating($userId)
    {
        $user = User::findOrFail($userId);

        $averageRating = $user->getAverageRating();

        return response()->json(['average_rating' => $averageRating]);
    }
}