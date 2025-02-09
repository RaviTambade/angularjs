import * as angular from 'angular';

// Interface for User Model
export interface IUser {
  id: number;
  name: string;
  email: string;
}

// Service to manage user data
export class UserService {
  static $inject = [];

  constructor() {}

  // Hardcoded data
  getUsers(): any {
    return [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ];
  }
}

angular.module('mainApp').service('UserService', UserService);
