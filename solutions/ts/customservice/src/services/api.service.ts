import * as angular from 'angular';

// Define an interface for API response (optional, but recommended for TypeScript)
interface IUser {
  id: number;
  name: string;
  email: string;
}

export class ApiService {
  static $inject = ['$http'];

  constructor(private $http: angular.IHttpService) {}

  // Example GET request to fetch users
  getUsers(): angular.IHttpPromise<IUser[]> {
    return this.$http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  // Example POST request to create a user
  createUser(user: IUser): angular.IHttpPromise<IUser> {
    return this.$http.post<IUser>('https://jsonplaceholder.typicode.com/users', user);
  }

  // Example PUT request to update user data
  updateUser(user: IUser): angular.IHttpPromise<IUser> {
    return this.$http.put<IUser>(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  // Example DELETE request to remove a user
  deleteUser(userId: number): angular.IHttpPromise<void> {
    return this.$http.delete<void>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}

