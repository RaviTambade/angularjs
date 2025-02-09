 
var UserController = /** @class */ (function () {
    function UserController($scope, UserService) {
        this.$scope = $scope;
        this.UserService = UserService;
        $scope['vm'] = this;
    }
    UserController.prototype.getAll = function () {
        this.users = this.UserService.getUsers(4);
    };
    UserController.$inject = ['$scope', 'UserService'];
    return UserController;
}());
 
angular.module('mainApp').controller('UserController', UserController);
