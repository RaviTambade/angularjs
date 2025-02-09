var app = angular.module('transflower');
var productDetailController = function ($scope, producthub, $routeParams) {
    

    var onProductGetComplete = function (response) {
        console.log('In onProductGetComplete Function');
         $scope.product=response;
         console.log('Product to be searched is '+$scope.product);
    
    };

    var onError = function (reason) {
        $scope.error;
    };
    $scope.productid = $routeParams.productid;
     
      producthub.get($scope.productid)
                                    .then(onProductGetComplete,onError);
    
};
app.controller("ProductDetailController", productDetailController);