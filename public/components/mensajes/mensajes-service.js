var app = angular.module('facturacionApp.mensajes', []);

app.factory('Mensajes', ['$http', '$q', function ($http, $q) {
    var self = {
        mensajes: [
            {
                img: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.18/img/user2-160x160.jpg',
                nombre: 'Juan Carlos',
                mensaje: 'Hola mundo',
                fecha: 'Marzo 5'
            },
            {
                img: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.18/img/user2-160x160.jpg',
                nombre: 'Cristian',
                mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rem, et, expedita provident modi ab non possimus optio similique, explicabo fugiat voluptatem, ex. Mollitia delectus, ex vel officiis deserunt perspiciatis.',
                fecha: 'Marzo 3'
            },
            {
                img: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.18/img/user2-160x160.jpg',
                nombre: 'Victor Martinez',
                mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rem, et, expedita provident modi ab non possimus optio similique, explicabo fugiat voluptatem, ex. Mollitia delectus, ex vel officiis deserunt perspiciatis.',
                fecha: 'Febrero 25'
            },
            {
                img: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.18/img/user2-160x160.jpg',
                nombre: 'Felipe Gonzales',
                mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rem, et, expedita provident modi ab non possimus optio similique, explicabo fugiat voluptatem, ex. Mollitia delectus, ex vel officiis deserunt perspiciatis.',
                fecha: 'Febrero 25'
            },
            {
                img: 'https://cdnjs.cloudflare.com/ajax/libs/admin-lte/2.4.18/img/user2-160x160.jpg',
                nombre: 'Felipe Gonzales',
                mensaje: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut rem, et, expedita provident modi ab non possimus optio similique, explicabo fugiat voluptatem, ex. Mollitia delectus, ex vel officiis deserunt perspiciatis.',
                fecha: 'Febrero 16'
            }
        ]
    };

    return self;
}])