(function(angular) {
  'use strict';
  var app=angular.module('app', ['ngComponentRouter', 'customers','products']);

  app.config(function ($locationProvider) {
      $locationProvider.html5Mode(true);
  });

app.value('$routerRootComponent', 'app')

app.component('app', {
  template:
    '<nav>\n' +
   // '  <a ng-link="[\'Reports\']">News</a>\n' +
    '  <a ng-link="[\'Customers\']">Customers</a>\n' +
    '  <a ng-link="[\'Products\']">Flowers</a>\n' +
    '</nav>\n' +
    '<ng-outlet></ng-outlet>\n',
  $routeConfig: [
    //{path: '/reports/...', name: 'Reports', component: 'reports', useAsDefault: true},
    { path: '/customers/...', name: 'Customers', component: 'customers', useAsDefault: true },
    {path: '/products/...', name: 'Products', component: 'products' }
  ]
});
})(window.angular);
