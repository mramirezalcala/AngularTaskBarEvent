var configAgenda = function($routeProvider){
 
    $routeProvider.when("/home", {
        controller: "mainController",
        templateUrl: "views/home.html"
    })
    .when("/startProcess", {
        controller : "addController",
        templateUrl : "views/startProcess.html"
    })
    .when("/stopProcess", {
        controller : "editController",
        templateUrl : "views/stopProcess.html"
    });
 
};
 

//creamos el modulo y le aplicamos la configuraciÃ³n
var Agenda = angular.module("Agenda", ["ngRoute",'ngTable']).config(configAgenda);