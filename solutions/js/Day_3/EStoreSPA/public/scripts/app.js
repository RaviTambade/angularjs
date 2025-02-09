(function() {
  var app = angular.module("transflower", ["ngRoute"]);
  app.config(function($routeProvider) {
    $routeProvider
      .when("/home", {
        templateUrl: "views/home/index.html",
        controller: "HomeIndexController"
        })
 
      .when("/productSearch", {
            templateUrl: "views/product/productsearch.html",
            controller: "ProductSearchController"
        })
      .when("/productDetail/:productid", {
            templateUrl: "views/product/productdetail.html",
            controller: "ProductDetailController"
        })
      .when("/productAdd", {
            templateUrl: "views/product/productadd.html",
            controller: "ProductAddController"
        })
        .when("/productUpdate/:productid", {
            templateUrl: "views/product/productupdate.html",
            controller: "ProductUpdateController"
      })

        .when("/productIndex", {
            templateUrl: "views/product/productindex.html",
            controller: "ProductIndexController"
        })
            .when("/productDelete/:productid", {
            templateUrl: "views/product/productindex.html",
            controller: "ProductDeleteController"
        })

      .otherwise({
          redirectTo: "/productIndex"
      });
  });
}());