import * as angular from 'angular';
import { UserService, IUser } from './user.service';

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class UserController {
  static $inject = ['$scope', 'UserService'];
  private users=[];

  constructor(private $scope: ICustomScope, private UserService: UserService) {
    // Initializing the users array when the controller is loaded
    
    this.$scope['vm'] = this;
    this.getAllUsers();
  }

  getAllUsers(): void {


    this.users = this.UserService.getUsers();
    // Bind the users list to scope for the view
 
  }
}

angular.module('mainApp').controller('UserController', UserController);
