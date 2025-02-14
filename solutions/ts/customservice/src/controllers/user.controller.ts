import * as angular from 'angular';
import { UserService } from '../services/user.service';

interface ICustomScope extends angular.IScope {
  vm: UserController; 
}

export class UserController {
  static $inject = ['$scope','UserService'];
  private users:any[]=[];

  constructor(private $scope: ICustomScope, private userService: UserService) {

      console.log('userService:', this.userService);  
      this.loadUsers();
      $scope['vm'] = this;
  }
  loadUsers(): void {
    this.users = this.userService.getUsers();
}
}
