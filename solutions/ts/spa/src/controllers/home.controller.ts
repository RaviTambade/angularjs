import * as angular from 'angular';

export class HomeController {
    static $inject = ['$scope'];
  message: string;
  
    constructor() {
      // Controller logic for Home
      this.message = 'Mentor As A Service';
    }
  }
  