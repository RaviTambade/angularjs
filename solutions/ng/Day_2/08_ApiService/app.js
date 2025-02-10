var app=angular.module('transflower',[]);
app.controller('MainController', function($scope, $http){
  
  var onUserComplete=function(response){
    $scope.user=response.data;
  };
  
  var onError=function(reason){
    $scope.message="something gone wrong";
  };
  
  $scope.search=function(username){
     $http.get("https://api.github.com/users/"+ username)
                 
  };
 
    $scope.username="angular";
    $scope.message= "Hello Transflower";

});