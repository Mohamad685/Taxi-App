<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingDriver extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'License'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
