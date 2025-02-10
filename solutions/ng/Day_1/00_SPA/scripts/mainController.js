var app = angular.module('transflower');
var mainController = function($scope,  $location) {

  var countDownTimer = null;

  $scope.search = function(username) {
    console.log("Invoked search()");
     $location.path("/user/" + username)
  };

   $scope.username = "RaviT";
   
};
app.controller("MainController", mainController);