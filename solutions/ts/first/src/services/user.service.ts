import * as angular from 'angular';

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

 export class UserService {
    static $inject = [];
    
    constructor() {
      console.log('UserService constructor');
    }
    // Simple method to return a list of users
    public getUsers(): any {
      return [
        { name: 'Ravi Tambade', email: 'ravi.tambade@transflower.in' },
        { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
        { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
      ];
    }
  }
  
//angular.module('myApp').service('UserService', UserService); 