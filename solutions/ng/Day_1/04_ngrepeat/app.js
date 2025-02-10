
var app=angular.module('transflower',[]);
app.controller('MainController', function($scope){
  
  $scope.showEmployees=function(){
    var people=[
      {name:"Ravi", location:"Pune", technology:".NET", certification:"MCT" },
      {name:"Rahul", location:"Mumbai", technology:"Java", certification:"OCJP" },
      {name:"Sham", location:"Chennai", technology:"Java", certification:"OCJP" },
      {name:"Manoj", location:"Delhi", technology:"Salesforce", certification:"MCSD" },
      {name:"Girish", location:"Hydrabad", technology:"Dynamics", certification:"MCSE" },
      {name:"Vanita", location:"Nashik", technology:"Amazon", certification:"OCJP" },
      {name:"Mangal", location:"Nagar", technology:".NET", certification:"MVP" },
      {name:"Shreya", location:"Surat", technology:"Salesforce", certification:"OCJP" }
      ];
      $scope.employees=people;
      
  };
   
   });