import * as angular from 'angular';
import 'angular-route';  // Import ngRoute for routing

// Import the controllers
import { HomeController } from './controllers/home.controller';
import { AboutController } from './controllers/about.controller';
import { ContactController } from './controllers/contact.controller';
import { ParentController } from './controllers/parent.controller';
import { ChildController } from './controllers/child.controller';
 

// Define the AngularJS module
const appModule = angular.module('myApp', ['ngRoute']);

// Configure routing with the $routeProvider
appModule.config(['$routeProvider', ($routeProvider:any) => {
  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html',  // Template for the home route
    controller: 'HomeController',  // Controller for the home route
    controllerAs: 'homeCtrl'  // Use 'homeCtrl' as alias for the controller instance
  })
  .when('/about', {
    templateUrl: 'views/about.html',  // Template for the about route
    controller: 'AboutController',  // Controller for the about route
    controllerAs: 'aboutCtrl'  // Use 'aboutCtrl' as alias for the controller instance
  })

  .when('/contact', {
    templateUrl: 'views/contact.html',  // Template for the contact route
    controller: 'ContactController',  // Controller for the Contact route
    controllerAs: 'contactCtrl'  // Use 'contactCtrl' as alias for the controller instance
  })

  .when('/parent', {
    templateUrl: 'views/parent.html',
    controller: 'ParentController',
    controllerAs: 'parent',
    // Nested child route
    resolve: {
      child: function() {
        return 'This is the child route message.';
      }
    },
    // Nested child routing
    redirectTo: '/parent/child'
  })
  .when('/parent/child', {
    templateUrl: 'views/child.html',
    controller: 'ChildController',
    controllerAs: 'child'
  })
  .otherwise({
    redirectTo: 'home'  // Default route is home
  });
}]);

// Register controllers with the module
appModule.controller('HomeController', HomeController);
appModule.controller('AboutController', AboutController);
appModule.controller('ContactController', ContactController);
appModule.controller('ParentContoller', ParentController);
appModule.controller('ChildController', ChildController);

export default appModule;
