var UserService = /** @class */ (function () {
    function UserService() {
        console.log('UserService constructor');
    }
    // Simple method to return a list of users
    UserService.prototype.getUsers = function () {
        return [
            { name: 'Ravi Tambade', email: 'ravi.tambade@transflower.in' },
            { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
            { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
        ];
    };
    UserService.$inject = [];
    return UserService;
}());

//angular.module('myApp').service('UserService', UserService); 
