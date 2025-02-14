
var app=angular.module('transflower',[]);

app.directive('trainer', function() {
   //define the directive object
   var directive = {};
   
   //restrict = E, signifies that directive is Element directive
   directive.restrict = 'E';
   
   //template replaces the complete element with its text. 
   directive.template = "Trainer: <b>{{trainer.name}}</b>";
   
   //scope is used to distinguish each student element based on criteria.
   directive.scope = {
      trainer : "=name"
   }
   
   //compile is called during application initialization. AngularJS calls it once when html page is loaded.
	
   directive.compile = function(element, attributes) {
      element.css("border", "1px solid blue");
      
      //linkFunction is linked with each element with scope to get the element specific data.
      var linkFunction = function($scope, element, attributes) {
         element.html("Trainer: <b>"+$scope.trainer.name +"</b>  Technology: <b>"+$scope.trainer.technology+"</b><br/>  Certification: <b>"+$scope.trainer.certification+"</b><br/> Age: <b>"+$scope.trainer.age+"</b><br/> Join Date: <b>"+$scope.trainer.joinDate+"</b><br/>");
         element.css("background-color", "green");
      }
      return linkFunction;
   }
   return directive;
});




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
      $scope.repos=people;
      $scope.repoSortOrder="age";
  };
  
  $scope.Ravi = {};
   $scope.Ravi.name = "Ravi Tambade";
   $scope.Ravi.technology  = ".NET";
   $scope.Ravi.certification= "MCT";
   $scope.Ravi.age=42;
   $scope.Ravi.joinDate="1997-12-22";
   
   
   });