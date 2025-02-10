var app = angular.module('transflower');
var productAddController = function ($scope, producthub, $routeParams) {
    
    $scope.productname = $routeParams.productname;
    $scope.add = function () {

        producthub.create($scope.product);
        
    };
};
app.controller("ProductAddController", productAddController);