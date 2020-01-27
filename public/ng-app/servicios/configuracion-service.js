var app = angular.module('facturacionApp.configuracion', []);

app.factory('Configuracion', ['$http', '$q', function ($http, $q) {
    var self = {
        config: {},
        cargar: function () {
            var d = $q.defer();

            $http.get('config.json')
                .success(function (data) {
                    self.config = data;
                    d.resolve();
                })
                .error(function (err) {
                    console.log(err);
                    d.reject(err);
                })

            return d.promise;
        }
    };

    return self;
}])