(function(angular) {
  'use strict';
angular.module('products', [])
  .service('productService', ProductService)

  .component('products', {
    template: '<h2>Products</h2><ng-outlet></ng-outlet>',
    $routeConfig: [
      {path: '/',    name: 'ProductList',   component: 'productList', useAsDefault: true},
      {path: '/:id', name: 'ProductDetail', component: 'productDetail'}
    ]
  })

  .component('productList', {
    template:
      '<div ng-repeat="product in $ctrl.products" ' +
      '     ng-class="{ selected: $ctrl.isSelected(product) }">\n' +
        '<a ng-link="[\'ProductDetail\', {id: product.id}]">{{product.name}}</a>\n' +
      '</div>',
    controller: ProductListComponent
  })

  .component('productDetail', {
    template:
      '<div ng-if="$ctrl.product">\n' +
      '  <h3>"{{$ctrl.product.name}}"</h3>\n' +
      '  <div>\n' +
      '    <label>Id: </label>{{$ctrl.product.id}}</div>\n' +
      '  <div>\n' +
      '    <label>Name: </label>\n' +
      '    <input ng-model="$ctrl.product.name" placeholder="name"/>\n' +
      '  </div>\n' +
      '    <label>UnitPrice: </label>\n' +
      '    <input ng-model="$ctrl.product.unitPrice" placeholder="unit price"/>\n' +
      '  </div>\n' +
      '  <button ng-click="$ctrl.gotoProducts()">Back</button>\n' +
      '</div>\n',
    bindings: { $router: '<' },
    controller: ProductDetailComponent
  });


function ProductService($q) {
  var productsPromise = $q.resolve([
    { id: 11, name: 'Gerbera',unitPrice:18 },
    { id: 12, name: 'Jasmine', unitPrice: 10 },
    { id: 13, name: 'Tulip', unitPrice: 20 },
    { id: 14, name: 'Lotus', unitPrice: 25 },
    { id: 15, name: 'Marigold', unitPrice: 5 },
    { id: 16, name: 'Sunflower', unitPrice: 10 }
  ]);

  this.getProducts = function() {
    return productsPromise;
  };

  this.getProduct = function(id) {
    return productsPromise.then(function(products) {
      for (var i = 0; i < products.length; i++) {
          if (products[i].id === id) return products[i];
      }
    });
  };
}

function ProductListComponent(productService) {
  var selectedId = null;
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Load up the heroes for this view
    productService.getProducts().then(function(products) {
        $ctrl.products = products;
      selectedId = next.params.id;
    });
  };

  this.isSelected = function(product) {
    return (product.id === selectedId);
  };
}

function ProductDetailComponent(productService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
      // Get the Product identified by the route parameter
    var id = next.params.id;
    productService.getProduct(id).then(function(product) {
        $ctrl.product = product;
    });
  };

  this.gotoProducts = function() {
    var productId = this.hero && this.product.id;
    this.$router.navigate(['ProductList', {id: productId}]);
  };
}
})(window.angular);
