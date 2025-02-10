var app = angular.module('transflower');
var productUpdateController = function ($scope, producthub, $routeParams) {
    
     var onProductGetComplete = function (response) {
      
       
        $scope.product=response;
        console.log($scope.product);
    };
        var onProducUpdateComplete = function (response) {
            console.log('Data is Updated');
    };

    var onError = function (reason) {
        $scope.error;
    };
    
    
    
    $scope.productid = $routeParams.productid;
     producthub.get($scope.productid).then(onProductGetComplete,onError);
 
    $scope.update = function (product) {
            console.log('Product to be updated' + product.stock);
            producthub.update(product).then(onProducUpdateComplete,onError);
       
    };
};
app.controller("ProductUpdateController", productUpdateController);