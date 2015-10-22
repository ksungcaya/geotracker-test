angular.module('TravelService', []).factory('Travel', ['$http',
  function ($http) {
    return {
        totalDistanceOn: function (date, cars) {
            $http.post('/api/cars/travel-distance', {
                date: date,
                cars: cars
            }).success(function (data) {
                console.log(data);
            });
        }
    }
  }
]);