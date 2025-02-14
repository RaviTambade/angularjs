var LoginController = /** @class */ (function () {
    function LoginController($scope) {
        this.$scope = $scope;
        this.username = '';
        this.password = '';
        this.message = '';
        $scope['vm'] = this;
    }
    LoginController.prototype.login = function () {
        if (this.username === 'admin' && this.password === 'password') {
            this.message = 'Login Successful';
        }
        else {
            this.message = 'Invalid credentials';
        }
    };
    LoginController.$inject = ['$scope'];
    return LoginController;
}());
 
//angular.module('myApp').controller('LoginController',['$scope', LoginController]);
