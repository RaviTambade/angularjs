import * as angular from 'angular';
import { UserService } from './services/user.service'
import { ApiService } from './services/api.service';
import { UserController } from './controllers/user.controller';
import { LoginController } from './controllers/login.controller';
import { MyController } from './controllers/app.controller';
import { ApiUserController } from './controllers/apiuser.controller';

angular.module('myApp', []);
angular.module('myApp').service('UserService', UserService);
angular.module('myApp').service('ApiService', ApiService);
angular.module('myApp').controller('UserController',  UserController);
angular.module('myApp').controller('LoginController',['$scope', LoginController]);
angular.module('myApp').controller('MyController', MyController);
angular.module('myApp').controller('ApiUserController', ApiUserController);

