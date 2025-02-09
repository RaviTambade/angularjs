var app = angular.module('transflower');
var productIndexController = function ($scope, $interval, $location,producthub) {

  var item={
      productId:100,
      Title:"Apple",
      UnitPrice:200,
      quantity:1
  };
    var onProductComplete = function (response) {
               $scope.products=response;
    };
    var onError = function (reason) {
        $scope.error;
    };

   var onGet = function (response) {
       $scope.allItems=response;
    };

    var onErr = function (reason) {
          $scope.error;
         };
 
    producthub.getAll().then(onProductComplete,onError);
         
    };
app.controller("ProductIndexController", productIndexController);

