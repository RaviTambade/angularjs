import * as angular from 'angular';

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class MyController {
  static $inject = ['$scope'];
  public message: string;

  constructor() {
    this.message = 'Hello from the directive controller!';
  }

  public changeMessage(): void {
    this.message = 'Message changed!';
  }
}


//angular.module('myApp').controller('MyController', MyController);


 // The directive definition
 export function myDirective(): ng.IDirective {
  return {
    restrict: 'E', // Restrict the directive to element type only
    template: `<div>
                <p>{{ ctrl.message }}</p>
                <button ng-click="ctrl.changeMessage()">Change Message</button>
               </div>`,
    controller: MyController,
    controllerAs: 'ctrl',
    bindToController: true // Bind the controller to the directive's scope
  };
}
