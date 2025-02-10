// userModule.js
var userModule = angular.module('userModule', []);

// Define a controller for the user module
userModule.controller('UserController', function($scope) {
    $scope.username = 'Sameer Joshi';
    $scope.age = 30;
});
