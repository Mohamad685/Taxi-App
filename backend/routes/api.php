<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\JwtMiddleware;
use App\Http\Controllers\AdminApproveDriverController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MessageController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['jwt.auth'])->group(function () {
    Route::get('getDriversRequests', [AdminApproveDriverController::class, 'getDriversRequests']);
    Route::post('/accept-driver/{id}', [AdminApproveDriverController::class, 'acceptDriver']);
    Route::post('/reject-driver/{id}', [AdminApproveDriverController::class, 'rejectDriver']);
    Route::post('/ride-requests/create', [RequestController::class, 'create']);
    Route::post('/ride-requests/update/{id}', [RequestController::class, 'updateStatus']);

    //Admin APIs
    Route::get('/getAllUsers', [UserController::class, 'getAllUsers']);
    Route::get('/getUsersAndRidesNumber', [UserController::class, 'getUsersAndRidesNumber']);

    Route::post('/deleteUser', [UserController::class, 'deleteUser']);

});

Route::post('/rate/{ratedUserId}', [RatingController::class, 'rateUser']);
Route::get('/rating/average/{ratedUserId}', [RatingController::class, 'getAverageRating']);


Route::post('/messages/send', [MessageController::class, 'sendMessage']);
Route::post('/messages/send-to-admin', [MessageController::class, 'sendMessageToAdmin']);
Route::post('/messages/admin/send/{receiverId}', [MessageController::class, 'sendMessageFromAdmin']);
// Get messages from admin for a specific user
Route::get('/messages/from-admin/{userId}', [MessageController::class, 'getMessagesFromAdmin']);
// Get messages between users
Route::get('/messages/{senderId}/{receiverId}', [MessageController::class, 'getMessagesForUser']);
