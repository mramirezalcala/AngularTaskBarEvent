//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("notasController", function($scope, notasModel ,  $filter, ngTableParams){
 
    //obtenemos todos los datos
    $scope.notas = notasModel.geData();
    
    // Guardamos el scope en una variable
    var data = $scope.notas;
    
    $scope.tableParams2 = new ngTableParams({
        page: 1,            // Indicamos que pagina queremos que muestre
        count: 10,          // cNumero de registros que mostramos por pagina
        filter: {
            name: '' ,      // Tamaño de los datos que recibimos
        		}
    	}, {
    	    total: data.length, // length of data
    	    getData: function($defer, params) {
    	        // use build-in angular filter
    	        var orderedData = params.filter() ?
    	               $filter('filter')(data, params.filter()) :
    	               data;
    	               
    	        $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());
    	        params.total(orderedData.length); // set total for recalc pagination
    	        
    	       	$defer.resolve($scope.users);
    	        	
    	       
    	    }
    	});
    
    $scope.tableParams = new ngTableParams({
        page: 1,            // Indicamos que pagina queremos que muestre
        count: 10,          // Numero de registros que mostramos por pagina
        filter: {
            		name: 'asc' ,      // Filtro inicial
        		}
    	}, {
    	    total: data.length, // Tamaño de los datos que recibimos
    	    getData: function($defer, params) {
    	       var orderedData2 = params.sorting() ?
    	    	        $filter('orderBy')(data, params.orderBy()) :
    	    	        data;
    	
    	        $scope.users2 = orderedData2.slice((params.page() - 1) * params.count(), params.page() * params.count());
    	        params.total(orderedData2.length); // Numero total de registros por paginacion
    	        
    	       	$defer.resolve($scope.users2);
    	        	
    	       
    	    }
    	});
 
	});
