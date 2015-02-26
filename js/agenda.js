var configAgenda = function($routeProvider){
 
    $routeProvider.when("/home", {
        controller: "notasController",
        templateUrl: "views/home.html"
    });
 
};
 

//creamos el modulo y le aplicamos la configuraciÃ³n
var Agenda = angular.module("Agenda", ["ngRoute",'ngTable']).config(configAgenda);