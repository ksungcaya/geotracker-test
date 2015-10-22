<?php

namespace App\Models;

use Jenssegers\Mongodb\Model;

class Car extends Model
{
    /**
     * The database collection used by the model.
     *
     * @var string
     */
    protected $collection = 'car';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'tracker', 
        'manufacturer', 
        'model', 
        'plate_nr',
        'odometer',
        'car_type_id',
        'max_speed',
        'max_idle',
        'user_ids',
        'fuelType',
        'driver_ids',
        'current_driver',
        'p_o_i_ids'
    ];
}
