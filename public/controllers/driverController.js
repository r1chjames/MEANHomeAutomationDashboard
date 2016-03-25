angular.module('HomeAutoApp')

.controller("DriverController",function($scope, $http) {
  $scope.isLoading = true;
  $http.get('/api/driver').
    success(function(data, status, headers, config) {
      $scope.drivers = data;
      $scope.isLoading = false;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});