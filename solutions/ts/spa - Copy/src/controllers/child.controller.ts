import * as angular from 'angular';

export class  ChildController {
    static $inject = ['$scope'];
    childMessage: string;
  
    constructor() {
      // Controller logic for Home
      this.childMessage = 'This is the child view loaded inside the parent.';
    }
  }
  