app.controller('etiquetasController', ['$scope', 'EtiquetaFactory', 'PublicacionesFactory',
    function($scope,EtiquetaFactory, PublicacionesFactory) {


       //Etiqueta.query(function(data){
       // $scope.tags = data.items;
       // console.log($scope.tags);
       //});

        EtiquetaFactory.getEtiquetas()
           .success(function (etiqs) {
               $scope.tags = etiqs;
               console.log("Etiquetas:")
               console.log(etiqs);
           })

          //.error(function (pubs) {
          //   $scope.status = 'Unable to load customer data: ' + error.message;
          //});

}]);