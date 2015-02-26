//modelo notasModel
//un servicio viene a ser un modelo
Agenda.service("notasModel", function(){
 
    this.geData= function(){
        return [
            { id: "1" , name: "Alta de tarjeta", estado: "Finalizada"},
            { id: "65" , name: "Datos personales", estado: "En curso"},
            { id: "15" , name: "Alta de tarjeta", estado: "Finalizada"},
            { id: "82" , name: "Modificación datos personales", estado: "Parada"},
            { id: "36" , name: "Anulación de tarjeta", estado: "Finalizada"},
            { id: "2" , name: "Datos personales", estado: "Finalizada"},
            { id: "35" , name: "Anulación de tarjeta", estado: "En curso"},
            { id: "98" , name: "Anulación de tarjeta", estado: "En curso"},
            { id: "41" , name: "Datos personales", estado: "En curso"},
            { id: "36" , name: "Cambio de dirección", estado: "En curso"},
            { id: "45" , name: "Anulación de tarjeta", estado: "En curso"},
            { id: "36" , name: "Alta de tarjeta", estado: "En proceso"},
            { id: "24" , name: "Alta de tarjeta", estado: "Finalizada"},
            { id: "9" , name: "Alta de tarjeta", estado: "Finalizada"}
        ]
    };
 
});


Agenda.directive("startbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<a href='#/startProcess' addbuttonsStart style='color: green'><i class='fa fa-play'></i></a>"
	};
});

Agenda.directive("stopbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<a href='#/stopProcess' addbuttons><i class='fa fa-stop' style='color: red;margin-left: 10px;'></i></a>"
	};
});

//Directive for adding buttons on click that show an alert on click
/*Agenda.directive("addbuttonsStart", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			scope.count++;
			angular.element(document.getElementById('space-for-buttons')).append($compile("<div><button class='btn btn-default' data-alert="+scope.count+">Show alert #"+scope.count+"</button></div>")(scope));
		});
	};
});
*/


