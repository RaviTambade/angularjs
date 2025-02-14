import * as angular from 'angular';

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class MainController {
  static $inject = ['$scope'];
  public message: string;

  constructor() {
    this.message = 'Hello from the directive controller!';
  }

  public changeMessage(): void {
    this.message = 'Message changed!';
  }
}

  // Custom filter definition
  export class UppercaseFilter {
    // The transform method will implement the logic of the filter
    transform(input: string): string {
      return input ? input.toUpperCase() : '';
    }
  }