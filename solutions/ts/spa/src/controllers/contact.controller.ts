import * as angular from 'angular';

export class ContactController {
    static $inject = ['$scope'];
    message: string;
  
    constructor() {
      // Controller logic for Home
      this.message = 'ravi.tambade@transsflower.in';
    }
  }
  