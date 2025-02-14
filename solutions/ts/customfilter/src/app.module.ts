import * as angular from 'angular';

import { MainController } from './controllers/app.controller';
import { UppercaseFilter } from './controllers/app.controller';

angular.module('myApp', []);
angular.module('myApp').controller('MainController', MainController);
angular.module('myApp').filter('uppercase',()=>new UppercaseFilter().transform);

 