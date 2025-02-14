
var ApiService = /** @class */ (function () {
    function ApiService($http) {
        this.$http = $http;
    }
    // Example GET request to fetch users
    ApiService.prototype.getUsers = function () {
        return this.$http.get('https://jsonplaceholder.typicode.com/users');
    };
    // Example POST request to create a user
    ApiService.prototype.createUser = function (user) {
        return this.$http.post('https://jsonplaceholder.typicode.com/users', user);
    };
    // Example PUT request to update user data
    ApiService.prototype.updateUser = function (user) {
        return this.$http.put("https://jsonplaceholder.typicode.com/users/".concat(user.id), user);
    };
    // Example DELETE request to remove a user
    ApiService.prototype.deleteUser = function (userId) {
        return this.$http.delete("https://jsonplaceholder.typicode.com/users/".concat(userId));
    };
    ApiService.$inject = ['$http'];
    return ApiService;
}());
 
// Register the service with the AngularJS module
angular.module('myApp').service('ApiService', ApiService);
