var app = angular.module('facturacionApp', ['ngRoute']);

app.controller('mainCtrl',  ['$scope', function ($scope) {
    $scope.message = 'Hola mundo';
}])