(function(angular) {
  'use strict';
angular.module('customers', [])
  .service('customerService', CustomerService)

  .component('customers', {
    template: '<h2>Customers</h2><ng-outlet></ng-outlet>',
    $routeConfig: [
      {path: '/',    name: 'CustomerList',   component: 'customerList', useAsDefault: true},
      {path: '/:id', name: 'CustomerDetail', component: 'customerDetail'}
    ]
  })

  .component('customerList', {
    template:
      '<div ng-repeat="customer in $ctrl.customers" ' +
      '     ng-class="{ selected: $ctrl.isSelected(customer) }">\n' +
        '<a ng-link="[\'CustomerDetail\', {id: customer.id}]">{{customer.name}}</a>\n' +
      '</div>',
    controller: CustomerListComponent
  })

  .component('customerDetail', {
    template:
      '<div ng-if="$ctrl.customer">\n' +
      '  <h3>"{{$ctrl.customer.name}}"</h3>\n' +
      '  <div>\n' +
      '    <label>Id: </label>{{$ctrl.customer.id}}</div>\n' +
      '  <div>\n' +
      '    <label>Name: </label>\n' +
      '    <input ng-model="$ctrl.customer.name" placeholder="name"/>\n' +
      '  </div>\n' +
      '  <button ng-click="$ctrl.gotoCustomers()">Back</button>\n' +
      '</div>\n',
    bindings: { $router: '<' },
    controller: CustomerDetailComponent
  });


function CustomerService($q) {
  var customersPromise = $q.resolve([
    { id: 111, name: 'Sameer' },
    { id: 112, name: 'Rajendra' },
    { id: 113, name: 'Manisha' },
    { id: 114, name: 'Sangram' },
    { id: 115, name: 'Revati' },
    { id: 116, name: 'Shailesh' }
  ]);

  this.getCustomers = function() {
    return customersPromise;
  };

  this.getCustomer = function(id) {
    return customersPromise.then(function(customers) {
      for (var i = 0; i < customers.length; i++) {
        if (customers[i].id === id) return customers[i];
      }
    });
  };
}

function CustomerListComponent(customerService) {
  var selectedId = null;
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Load up the heroes for this view
    customerService.getCustomers().then(function(customers) {
      $ctrl.customers = customers;
      selectedId = next.params.id;
    });
  };

  this.isSelected = function(customer) {
    return (customer.id === selectedId);
  };
}

function CustomerDetailComponent(customerService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Get the customer identified by the route parameter
    var id = next.params.id;
    customerService.getCustomer(id).then(function(customer) {
      $ctrl.customer = customer;
    });
  };

  this.gotoCustomers = function() {
    var customerId = this.customer && this.customer.id;
    this.$router.navigate(['CustomerList', {id: customerId}]);
  };
}
})(window.angular);
