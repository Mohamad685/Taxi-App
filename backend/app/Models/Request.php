<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'passenger_id',
        'current_location',
        'destination',
        'status',
    ];

    public function passenger()
    {
        return $this->belongsTo(User::class, 'passenger_id');
    }
}
