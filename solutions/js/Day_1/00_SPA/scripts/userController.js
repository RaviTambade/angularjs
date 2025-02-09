var app = angular.module('transflower');
var userController = function($scope,$routeParams) {
   
  $scope.username = $routeParams.username;
  $scope.repoSortOrder="-stars";
  $scope.courses=[
    {name:'SharePoint', stars:5,language:'CSharp'},
    {name:'Angular JS 1.5',stars:5,language:'Javascript'},
    {name:'Angular JS 2', stars:4, language:'Typescript'},
    {name:'ASP.NET MVC', stars:5, language:'CSharp'},
    {name:'Spring', stars:4, language:'Java'},
    {name:'WPF', stars:5, language:'VB.NET'},
    {name:'MFC', stars:5, language:'C++'},
    {name:'Windows Application', stars:4, language:'C'},
  ];
  
  };
app.controller("UserController", userController);