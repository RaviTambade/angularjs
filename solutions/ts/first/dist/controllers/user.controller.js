var UserController = /** @class */ (function () {
    function UserController($scope, userService) {
        this.$scope = $scope;
        this.userService = userService;
        this.users = [];
        console.log('userService:', this.userService);
        this.loadUsers();
        $scope['vm'] = this;
    }
    UserController.prototype.loadUsers = function () {
        this.users = this.userService.getUsers();
    };
    UserController.$inject = ['$scope', 'UserService'];
    return UserController;
}());

//angular.module('myApp').controller('UserController',  UserController);
