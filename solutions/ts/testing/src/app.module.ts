// src/app.module.ts
import * as angular from 'angular';

// Define the app module
const app = angular.module('app', []);

// Define a simple controller
app.controller('MainController', function($scope) {
  $scope.message = 'Hello, AngularJS with TypeScript!';
});

export default app;
