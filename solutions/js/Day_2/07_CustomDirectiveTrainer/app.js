var app = angular.module('transflower', []);


app.controller('MainController', function($scope) {
   $scope.Ravi = {};
  
   $scope.Ravi.name = "Ravi Tambade";
   $scope.Ravi.technology  = ".NET";
   $scope.Ravi.certification= "MCT";
   $scope.Ravi.age=42;
   $scope.Ravi.joinDate="1997-12-22";
   
   $scope.Rahul = {};
  
   $scope.Rahul.name = "Rahul Navale";
   $scope.Rahul.technology  = "OpenSource";
   $scope.Rahul.certification= "MCT";
   $scope.Rahul.age=29;
   $scope.Rahul.joinDate="2004-2-2";
  
});
    


//Custom Directive

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
         element.html("Trainer: <b>"+$scope.trainer.name +"</b>"+
                      "Technology:<b>"+$scope.trainer.technology+"</b><br/>"+
                      "Certification:<b>"+$scope.trainer.certification+"</b><br/>"+
                      "Age: <b>"+$scope.trainer.age+"</b><br/>"+
                      "Join Date: <b>"+$scope.trainer.joinDate+"</b><br/>");
         element.css("background-color", "skyblue");
      }
      return linkFunction;
   }
   return directive;
});
