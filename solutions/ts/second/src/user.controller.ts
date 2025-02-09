import * as angular from 'angular';
import { UserService } from './user.service';

interface ICustomScope extends angular.IScope {
    vm: any; 
  }

  
export class UserController {
    users:any;
    static $inject = ['$scope', 'UserService'];

    constructor(private $scope: ICustomScope, private UserService: UserService) {
        $scope['vm'] = this;
    }

    getAll(): void {
        this.users = this.UserService.getUsers(4);
    }
}

angular.module('mainApp').controller('UserController', UserController);
