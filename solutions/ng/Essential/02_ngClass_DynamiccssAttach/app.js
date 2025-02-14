var app=angular.module('transflower',[]);
app.controller('MainController', function($scope){
  $scope.style="seed";
  $scope.name="Seed Infotech Ltd.";
              // Sscope.customerId=34;
               $scope.firstName = "Ravi";
               $scope.lastName = "Tambade";
               $scope.address="Pune";
               $scope.mobilenumber=9881735801;
               $scope.birthdate="18/8/1975";
               $scope.email = "ravi.tambade@transflower.in";
});