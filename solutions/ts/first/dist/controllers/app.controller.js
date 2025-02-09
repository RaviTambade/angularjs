var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to Transflower TypeScript!';
        this.users = [
            { name: 'Ravi Tambade', email: 'ravi.tambade@transflower.in' },
            { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
            { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());

//angular.module('myApp').controller('MyController', MyController);
