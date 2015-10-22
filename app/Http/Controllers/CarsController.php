<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Car;
use App\Models\Spot;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class CarsController extends Controller
{
    /**
     * Display cars list.
     *
     * @return Reponse
     */
    public function index()
    {
        return Spot::where('imei', '359006059517510')->limit(10)->get();
        return Car::all();
    }

    /**
     * Calculate distance traveled from the given date.
     *
     * @param  Request $request
     *
     * @return Response
     */
    public function distanceTraveledOn(Request $request)
    {
        $startDate = Carbon::parse($request->get('date'));
        $date = $startDate->format('Y-m-d');

        $cars = Car::whereIn('_id', $request->get('cars'))->get();
        $imeiTrackers = [];

        foreach ($cars as $car) {
            array_push($imeiTrackers, $car->tracker['imei']);
        }

        return Spot::whereIn('imei', $imeiTrackers)
                    ->where('time', 'LIKE', "%$date%")
                    ->get();
    }
}
