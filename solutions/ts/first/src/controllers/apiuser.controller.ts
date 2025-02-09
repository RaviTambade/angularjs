import * as angular from 'angular';
import { ApiService } from '../services/api.service';

interface ICustomScope extends angular.IScope {
  users: any[];
  user: any;
}

export class ApiUserController {
  static $inject = ['$scope', 'ApiService'];

  constructor(private $scope: ICustomScope, private apiService: ApiService) {
    this.$scope.users = [];
    this.$scope.user = {}; // Initialize user object (for form)
    this.loadUsers(); // Call loadUsers to fetch data on init
  }

  // Method to load users using ApiService
  loadUsers(): void {
    this.apiService.getUsers()
      .then((response) => {
        this.$scope.users = response.data;
      })
      .catch((error) => {
        console.error('Error loading users:', error);
      });
  }

  // Method to create a new user
  createUser(): void {
    const newUser:any = { name: 'New User', email: 'new.user@example.com' };
    this.apiService.createUser(newUser)
      .then((response) => {
        console.log('User created:', response.data);
        this.loadUsers(); // Reload users list after creating
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  }

  // Method to delete a user
  deleteUser(userId: number): void {
    this.apiService.deleteUser(userId)
      .then(() => {
        console.log('User deleted');
        this.loadUsers(); // Reload users list after deletion
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  }
}

angular.module('myApp').controller('ApiUserController', ApiUserController);
