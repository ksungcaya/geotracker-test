angular.module('CarService', []).factory('Car', ['$resource',
  function ($resource) {
    return $resource('/api/cars/:carId', { carId: '@id' }, 
            {
                update: {
                    method: 'PUT'
                }
            });
  }
]);