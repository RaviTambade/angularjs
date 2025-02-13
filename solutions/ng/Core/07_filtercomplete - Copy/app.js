
var app=angular.module('transflower',[]);
app.controller('MainController', function($scope){
  
  $scope.search=function(){
    
    var people=[{name:"Ravi", location:"Pune", technology:".NET", certification:"MCT",salary:250000,age:41 ,consultant:true,joinDate:"2013-08-18"},
      {name:"Rahul", location:"Mumbai", technology:"Java", certification:"OCJP",salary:170000,age:34 ,consultant:false,joinDate:"2013-08-18" },
      {name:"Sham", location:"Chennai", technology:"Java", certification:"OCJP",salary:280000,age:31 ,consultant:true,joinDate:"2013-08-18" },
      {name:"Manoj", location:"Delhi", technology:"Salesforce", certification:"MCSD",salary:25000 ,age:28,consultant:false,joinDate:"2013-08-18" },
      {name:"Girish", location:"Hydrabad", technology:"Dynamics", certification:"MCSE",salary:50000,age:25,consultant:false,joinDate:"2013-08-18"  },
      {name:"Vanita", location:"Nashik", technology:"Amazon", certification:"OCJP",salary:450000,age:45,consultant:true ,joinDate:"2013-08-18" },
      {name:"Mangal", location:"Nagar", technology:".NET", certification:"MVP",salary:150000,age:32,consultant:true,joinDate:"2013-08-18" },
      {name:"Shreya", location:"Surat", technology:"Salesforce", certification:"OCJP",salary:350000,age:41,consultant:false,joinDate:"2013-08-18"  }
      ];
      $scope.employees=people;
      $scope.repoSortOrder="age";
  };
   
   });