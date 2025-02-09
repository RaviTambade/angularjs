import * as angular from 'angular';
import { UserService } from './user.service';
import { UserController } from './user.controller';

angular.module('mainApp', [])
  .service('UserService', UserService)
  .controller('UserController', UserController);
