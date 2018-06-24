'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$http', function ($http) {
        var self = this;
        this.lista = [];
        this.zmiennaZPolaTekstowego = '';

        this.daneZSerwera = {};
        this.dodajDoListy = function () {
            self.lista.push({
                'name': self.nazwa,
                'quantity': self.ilosc
            });

            console.log('Dodaje:  ' + self.lista);

        };
        this.funkcja1 = function () {

            console.log("klik");
            for (var index in self.lista) {
                var elementDoWyslania = self.lista[index];
                $http.post('http://localhost:8080/dostawa', elementDoWyslania)
                    .then(function (dane) {
                            console.log('Udalo sie');
                            self.daneZSerwera = dane;
                        },
                        function (error) {
                            console.log('Error');
                        });
            }

        }
    }]);