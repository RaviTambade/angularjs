import * as angular from 'angular';

export class AboutController {
    static $inject = ['$scope'];
    message: string;
  
    constructor() {
      // Controller logic for About
      this.message = 'Transflower Learning';
    }
  }
  