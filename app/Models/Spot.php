<?php

namespace App\Models;

use Jenssegers\Mongodb\Model;

class Spot extends Model
{
    /**
     * The database collection used by the model.
     *
     * @var string
     */
    protected $collection = 'spot';

    /**
     * Attributes to be mutated as dates.
     *
     * @var array
     */
    protected $dates = ['time'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lat', 
        'lng', 
        'alt', 
        'speed',
        'power',
        'address',
        'course',
        'valid',
        'time',
        'other',
        'imei'
    ];
}
