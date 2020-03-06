var app = angular.module('facturacionApp.notificaciones', []);

app.factory('Notificaciones', ['$http', '$q', function ($http, $q) {
    var self = {
        notificaciones: [
            {
                icono: 'fa-user',
                notificacion: 'Nuevo usuario registrado'
            },
            {
                icono: 'fa-save',
                notificacion: 'Se esta usando el 50% del disco'
            },
            {
                icono: 'fa-clock-o',
                notificacion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse possimus non aperiam, asperiores voluptatem ut. Repellendus minima pariatur eos quidem necessitatibus odio nulla placeat reprehenderit nisi culpa quos aspernatur, ex?'
            }
        ]
    };

    return self;
}])