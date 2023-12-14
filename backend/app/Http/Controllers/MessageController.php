<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\User;
use App\Models\Ride;
use Tymon\JWTAuth\Facades\JWTAuth;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        try {
            $authenticatedUserId = JWTAuth::parseToken()->authenticate()->id;
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized. Please log in.'], 401);
        }
        
        $request->validate([
            'sender_id' => 'required|exists:users,id',
            'receiver_id' => 'required|exists:users,id',
            'content' => 'required|string',
        ]);

        $sender = User::findOrFail($request->input('sender_id'));
        $receiver = User::findOrFail($request->input('receiver_id'));

        if ($authenticatedUserId != $sender->id) {
            return response()->json(['error' => 'Unauthorized. Only the authenticated user can send messages.'], 403);
        }

        // Check if the sender and receiver are both in a ride (only for drivers and passengers)
        if ($sender->isDriver() && $receiver->isPassenger() || $sender->isPassenger() && $receiver->isDriver()) {
            $ride = Ride::where('passenger_id', $sender->id)
                ->where('driver_id', $receiver->id)
                ->orWhere('driver_id', $sender->id)
                ->where('passenger_id', $receiver->id)
                ->first();

            if (!$ride) {
                return response()->json(['error' => 'Unauthorized to send messages. Users must be in a ride.'], 403);
            }
        }

        $message = Message::create([
            'sender_id' => $sender->id,
            'receiver_id' => $receiver->id,
            'content' => $request->input('content'),
        ]);

        return response()->json(['message' => $message, 'status' => 'Message sent successfully'], 201);
    }
     
    public function sendMessageToAdmin(Request $request)
    {
        $request->validate([
            'sender_id' => 'required|exists:users,id',
            'content' => 'required|string',
        ]);

        $sender = User::findOrFail($request->input('sender_id'));

        if (!$sender->isDriver() && !$sender->isPassenger()) {
            return response()->json(['error' => 'Unauthorized user'], 403);
        }

        //admins are of type 1
        $adminUsers = User::where('type_id', 1)->get(); 
        // $adminUsers = User::whereHas('type', function ($query) {
        //     $query->where('name', 'admin');
        // })->get();

        if ($adminUsers->isEmpty()) {
            return response()->json(['error' => 'No admin users found.'], 500);
        }

        $adminUser = $adminUsers->first();

        $message = Message::create([
            'sender_id' => $request->input('sender_id'),
            'receiver_id' => $adminUser->id,
            'content' => $request->input('content'),
        ]);

        return response()->json(['message' => $message, 'status' => 'Message sent to admin successfully'], 201);
    }

    public function getMessagesFromAdmin($userId)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
    
            if (!$user->isDriver() && !$user->isPassenger()) {
                return response()->json(['error' => 'Unauthorized. Only drivers and passengers can retrieve messages from admin.'], 403);
            }
    
            $adminUsers = User::where('type_id', 1)->get(); 
    
            if ($adminUsers->isEmpty()) {
                return response()->json(['error' => 'No admin users found.'], 500);
            }
    
            $messages = Message::where('receiver_id', $user->id)
                ->whereIn('sender_id', $adminUsers->pluck('id'))
                ->with(['sender', 'receiver'])
                ->get();
    
            return response()->json(['messages' => $messages]);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Failed to authenticate.'], 401);
        }
    }

    public function getMessagesForUser($senderId, $receiverId)
    {
        try {
            $authenticatedUser = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized. Please log in.'], 401);
        }

        $authenticatedUserId = $authenticatedUser->id;

        if ($authenticatedUserId != $senderId && $authenticatedUserId != $receiverId) {
            return response()->json(['error' => 'Unauthorized to access these messages'], 403);
        }

        $messages = Message::where(function ($query) use ($senderId, $receiverId) {
            $query->where('sender_id', $senderId)->where('receiver_id', $receiverId);
        })->orWhere(function ($query) use ($senderId, $receiverId) {
            $query->where('sender_id', $receiverId)->where('receiver_id', $senderId);
        })->with(['sender', 'receiver'])->get();

        return response()->json(['messages' => $messages]);
    }

    public function sendMessageFromAdmin(Request $request, $receiverId)
    {
        try {
            $admin = JWTAuth::parseToken()->authenticate();

            if (!$admin->isAdmin()) {
                return response()->json(['error' => 'Unauthorized. Only admin users can send messages from admin.'], 403);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Unauthorized. Please log in.'], 401);
        }

        $request->validate([
            'content' => 'required|string',
        ]);

        $receiver = User::findOrFail($receiverId);

        $message = Message::create([
            'sender_id' => $admin->id,
            'receiver_id' => $receiver->id,
            'content' => $request->input('content'),
        ]);

        return response()->json(['message' => $message, 'status' => 'Message sent from admin successfully'], 201);
    }
}

