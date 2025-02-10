var app = angular.module('transflower');
var searchController = function($scope,$location) {

  $scope.search = function(username) {
    console.log("Invoked search()");
     $location.path("/user/" + username)
  };

   $scope.username = "RaviT";
   
};
app.controller("SearchController", searchController);