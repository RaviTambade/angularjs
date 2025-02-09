
var ApiUserController = /** @class */ (function () {
    function ApiUserController($scope, apiService) {
        this.$scope = $scope;
        this.apiService = apiService;
        this.$scope.users = [];
        this.$scope.user = {}; // Initialize user object (for form)
        this.loadUsers(); // Call loadUsers to fetch data on init
    }
    // Method to load users using ApiService
    ApiUserController.prototype.loadUsers = function () {
        var _this = this;
        this.apiService.getUsers()
            .then(function (response) {
            _this.$scope.users = response.data;
        })
            .catch(function (error) {
            console.error('Error loading users:', error);
        });
    };
    // Method to create a new user
    ApiUserController.prototype.createUser = function () {
        var _this = this;
        var newUser = { name: 'New User', email: 'new.user@example.com' };
        this.apiService.createUser(newUser)
            .then(function (response) {
            console.log('User created:', response.data);
            _this.loadUsers(); // Reload users list after creating
        })
            .catch(function (error) {
            console.error('Error creating user:', error);
        });
    };
    // Method to delete a user
    ApiUserController.prototype.deleteUser = function (userId) {
        var _this = this;
        this.apiService.deleteUser(userId)
            .then(function () {
            console.log('User deleted');
            _this.loadUsers(); // Reload users list after deletion
        })
            .catch(function (error) {
            console.error('Error deleting user:', error);
        });
    };
    ApiUserController.$inject = ['$scope', 'ApiService'];
    return ApiUserController;
}());

//angular.module('myApp').controller('ApiUserController', ApiUserController);
