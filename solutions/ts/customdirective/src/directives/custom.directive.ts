// The directive definition
import { MyController } from "../controllers/app.controller";
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
  