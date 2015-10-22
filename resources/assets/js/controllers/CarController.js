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