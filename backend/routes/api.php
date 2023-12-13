<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Middleware\JwtMiddleware;
use App\Http\Controllers\AdminApproveDriverController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\UserController;


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

    //Users APIs
    Route::get('/getAllUsers', [UserController::class, 'getAllUsers']);
    Route::post('/deleteUser', [UserController::class, 'deleteUser']);

});

Route::post('/rate/{ratedUserId}', [RatingController::class, 'rateUser']);
Route::get('/average-rating/{userId}', [RatingController::class, 'averageRate']);
