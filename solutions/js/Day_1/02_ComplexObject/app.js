
var app=angular.module('transflower',[]);

app.controller('MainController', function($scope){ 
  var person={
    firstName:"Ravi",
    lastName:"Tambade"
  };
  
  $scope.name="Transflower";
  $scope.person=person;
});