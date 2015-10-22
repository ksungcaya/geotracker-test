<?php

Route::get('/', function () {
    return view('index');
});

Route::post('api/cars/travel-distance', 'CarsController@distanceTraveledOn');

Route::resource('api/cars', 'CarsController');

Route::get('/partials/{category}/{action?}', function ($category, $action = 'index') {
    return view(join('.', ['partials', $category, $action]));
});

Route::get('/partials/{category}/{action}/{id}', function ($category, $action = 'index', $id) {
    return view(join('.', ['partials', $category, $action]));
});