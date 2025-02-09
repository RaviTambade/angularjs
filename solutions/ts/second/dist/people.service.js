 
var PeopleService = /** @class */ (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getAll = function (a, b) {
        return [
            { name: 'Ravi Tambade', email: 'ravi.tambade@transflower.in' },
            { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
            { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
        ];
    };
    PeopleService.$inject = [];
    return PeopleService;
}());
 
angular.module('mainApp').factory('PeopleService', PeopleService);
