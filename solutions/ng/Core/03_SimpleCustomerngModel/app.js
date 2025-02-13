var app=angular.module('transflower',[]);
app.controller('MainController', function($scope){
  
  
     $scope.message= "Hello Transflower";
     $scope.firstName="Ravi";
     $scope.lastName="Tambade";
     $scope.location="Pune";
     $scope.contactNumber="9881735801";
   

   $scope.onSubmit=function(){

     console.log("user is :" + $scope.firstName+" "+ $scope.lastName);
   };
     
});