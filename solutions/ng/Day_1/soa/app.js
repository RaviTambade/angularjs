// Define the AngularJS app
var app = angular.module('myApp', []);

// Define the service
app.service('UserService', function() {
    var user = { name: 'John Doe', age: 30 };

    // Method to get user data
    this.getUser = function() {
        return user;
    };

    // Method to update user data
    this.setUser = function(newUser) {
        user = newUser;
    };
});

app.controller('MainController', function($scope, UserService) {
    // Get user data from the service
    $scope.user = UserService.getUser();

    // Function to update user data via the service
    $scope.updateUser = function(newUser) {
        UserService.setUser(newUser);
        $scope.user = UserService.getUser();
    };
});
