angular.module('myApp', []);
angular.module('myApp').service('UserService', UserService);
angular.module('myApp').service('ApiService', ApiService);
angular.module('myApp').controller('UserController', UserController);
angular.module('myApp').controller('LoginController', ['$scope', LoginController]);
angular.module('myApp').controller('MyController', MyController);
angular.module('myApp').controller('ApiUserController', ApiUserController);
