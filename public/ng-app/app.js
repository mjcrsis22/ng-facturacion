var app = angular.module('facturacionApp', [
    'ngRoute',
    'facturacionApp.configuracion',
    'facturacionApp.mensajes',
    'facturacionApp.notificaciones'
]);

app.controller('mainCtrl',  ['$scope', 'Configuracion', 'Mensajes', 'Notificaciones', function ($scope, Configuracion, Mensajes, Notificaciones) {
    $scope.config = {};
    $scope.mensajes = Mensajes.mensajes;
    $scope.notificaciones = Notificaciones.notificaciones;

    $scope.usuario = {
        nombre: 'Carlos Andrea'
    };

    Configuracion.cargar()
        .then(function () {
            $scope.config = Configuracion.config;
        });
}]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}]);

app
.filter('letra0', function () {
    return function (texto) {
        return !!texto && texto.length>1 ? texto[0] : texto;
    }
})
.filter('letra0Invert', function () {
    return function (texto) {
        return !!texto && texto.length>1 ? texto.substr(1) : '';
    }
})
.filter('mensajeCorto', function () {
    return function (texto='') {
        return texto.length > 34 ? `${texto.substr(0, 35)}...` : texto;
    }
});