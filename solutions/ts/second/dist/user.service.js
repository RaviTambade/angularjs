 
var UserService = /** @class */ (function () {
    function UserService(PeopleService) {
        this.PeopleService = PeopleService;
    }
    UserService.prototype.getUsers = function (a) {
        return this.PeopleService.getAll(a, a);
    };
    UserService.$inject = ['PeopleService'];
    return UserService;
}());
 
angular.module('mainApp').service('UserService', UserService);
