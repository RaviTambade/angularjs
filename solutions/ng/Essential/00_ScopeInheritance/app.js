var app=angular.module('transflower',[]);

app.controller('CompanyController', function($scope){
  $scope.company='Transflower';
  $scope.type="Web Development";
  $scope.name="Scope for CompnayController";
});

app.controller('CourseController' , function($scope){
  $scope.courses = [
                    'Essential .NET',
                    'ASP.NET MVC',
                    'SPA using Angular JS',
                    'Office 365 App Development',
                    'Node JS',
                    'Java',
                    ];
  $scope.name="Scope for CourseController";
});
