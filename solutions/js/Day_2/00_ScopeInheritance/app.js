var app=angular.module('transflower',[]);

app.controller('CompanyController', function($scope){
  $scope.company='Transflower';
  $scope.type="Web Development";
  $scope.name="Scope for CompnayController";
});

app.controller('CourseController' , function($scope){
  $scope.courses = ['Jump Start HTML5',
                    'Jump Start CSS',
                    'Jump Start Responsive Web Design',
                    'Essential .NET',
                    'ASP.NET MVC',
                    'SPA using Angular JS 1.5',
                    'Universal Windows App Development',
                    'Office 365 App Development',
                    'Node JS',
                    'Core Java',
                    'Adv. Java', 
                    ];
  $scope.name="Scope for CourseController";
});
