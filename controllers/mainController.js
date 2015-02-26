//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("mainController", function($scope, notasModel ,  $filter, ngTableParams){
 
    //obtenemos todos los datos
    $scope.notas = notasModel.geData();
    
    // Guardamos el scope en una variable
    var data = $scope.notas;
    
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
    
    $scope.tableParams2 = new ngTableParams({
        page: 1,            // Indicamos que pagina queremos que muestre
        count: 10,          // cNumero de registros que mostramos por pagina
        filter: {}
    	}, {
    	    total: data.length, // length of data
    	    getData: function($defer, params) {

    	    	// Se guarda el valor del array en una variable
    	    	var orderedData = data;
    	               
    	        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
    	        params.total(orderedData.length); // Numero total de registros por paginacion
    	        
    	       	$defer.resolve($scope.users);
    	        	
    	       
    	    }
    	});
    
	});
