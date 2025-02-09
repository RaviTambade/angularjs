var app = angular.module('transflower');

var productDeleteController = function ($scope, producthub, $routeParams,$location) {
    $scope.productid = $routeParams.productid;
   

   var onError = function (reason) {
        $scope.error;
        console.log($scope.error);
    };  

   var onProductRemoveComplete = function (response) {
         console.log("Redirecting to index");
         $scope.$apply();
          
    };
    producthub.remove($scope.productid).then(onProductRemoveComplete,onError); 
};
app.controller("ProductDeleteController", productDeleteController);