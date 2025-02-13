var app=angular.module('transflower',[]);
app.controller('MainController', function($scope){
  $scope.search=function(){
    var people=[
      {name:"Ravi", location:"Pune", technology:".NET", certification:"MCT",salary:250000,age:41 ,consultant:true},
      {name:"Rahul", location:"Mumbai", technology:"Java", certification:"OCJP",salary:170000,age:34 ,consultant:false },
      {name:"Sham", location:"Chennai", technology:"Java", certification:"OCJP",salary:280000,age:31 ,consultant:true },
      {name:"Manoj", location:"Delhi", technology:"Salesforce", certification:"MCSD",salary:25000 ,age:28,consultant:false },
      {name:"Girish", location:"Hydrabad", technology:"Dynamics", certification:"MCSE",salary:50000,age:25,consultant:false  },
      {name:"Vanita", location:"Nashik", technology:"Amazon", certification:"OCJP",salary:450000,age:45,consultant:true  },
      {name:"Mangal", location:"Nagar", technology:".NET", certification:"MVP",salary:150000,age:32,consultant:true },
      {name:"Shreya", location:"Surat", technology:"Salesforce", certification:"OCJP",salary:350000,age:41,consultant:false  }
      ];
      $scope.employees=people;
  };
   
});