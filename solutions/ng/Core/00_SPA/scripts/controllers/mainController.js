var app = angular.module('transflower');
var mainController = function($scope,  $location) {
  $scope.username = "RaviT";

  $scope.search = function(username) {
    console.log("Invoked search()");
     $location.path("/user/" + username)
  };
  
};
app.controller("MainController", mainController);