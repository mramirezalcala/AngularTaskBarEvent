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
		template: "<button addbuttons><i class='fa fa-play'></i></button>"
	};
});

Agenda.directive("stopbuttonsbutton", function(){
	return {
		restrict: "E",
		template: "<button addbuttons><i class='fa fa-stop'></i></button>"
	};
});



