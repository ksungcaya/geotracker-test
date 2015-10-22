angular.module('iGeoTracker', [
    'ngRoute',
    'ngResource',
    'datePicker',
    'isteven-multi-select',
    'routes',
    'CarController',
    'CarService',
    'TravelService'
]);
angular.module('routes', []).config(['$routeProvider', '$locationProvider', '$httpProvider',
  function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/cars/index',
        controller: 'CarController'
      })
      .when('/:category/:action?/:id?', {
        templateUrl: function (params) {
          var allowedParams = ['category', 'action', 'id'];
          var paramVals = [];
          for (var key in params) {
            if (allowedParams.indexOf(key) !== -1) {
              paramVals.push(params[key]);
            }
          }
          return '/partials/' + paramVals.join('/');
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    
    $locationProvider.html5Mode(true);

  }
]);

angular.module('CarController', []).controller('CarController', ['$scope', '$filter', '$routeParams', 'Car', 'Travel',
    function ($scope, $filter, $routeParams, Car, Travel) {

        $scope.carSelection = [];
        $scope.travelDistances = [];

        $scope.getAll = function () {
            $scope.cars = Car.query();
        };

        $scope.travelDistanceOn = function () {
            var date = $filter('date')($scope.date, 'yyyy-MM-dd'),
                cars = $scope.extractIdsFrom($scope.carSelection);

            $scope.travelDistances = Travel.totalDistanceOn(date, cars);
        };

        $scope.extractIdsFrom = function (cars) {
            var ids = [];

            angular.forEach(cars, function (item) {
                return ids.push(item._id);
            });

            return ids;
        };

        $scope.getAll();
    }
]);
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
//# sourceMappingURL=app.js.map
