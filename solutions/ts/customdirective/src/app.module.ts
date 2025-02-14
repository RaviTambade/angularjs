import * as angular from 'angular';
import { MyController } from './controllers/app.controller';
import { myDirective} from './directives/custom.directive' 
angular.module('myApp', []);
angular.module('myApp').controller('MyController', MyController);
angular.module('myApp').directive('myDirective', myDirective);

 