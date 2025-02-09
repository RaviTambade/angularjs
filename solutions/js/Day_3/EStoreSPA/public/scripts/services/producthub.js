(function () {

    var producthubService = function ($http) {
        
    var getAllProducts = function () {
            return $http.get("http://localhost:7000/api/products")
                        .then (function(response) {
                             return response.data;
                        }); 
    };

    var getProductById = function (id) {
        console.log('GetByID Function is Called from Service');
            return $http.get("http://localhost:7000/api/products/"+ id)
                        .then (function(response) {
                            console.log(response.data);
                                return response.data;
                        }); 
    };

    var updateProduct=function(product){
       return $http.put("http://localhost:7000/api/products/"+product.productId,
                            product)
                        .then (function(response) {return response.data;}); 
    };

    var createProduct=function(product){
        var promise=$http.post("http://localhost:7000/api/products" , product);
            promise.success(function (data, status, headers, config) {
            console.log(data);
            })
            promise.error(function (data, status, headers, config) {
            console.log("Error" + JSON.stringify({data:data}));
            })
        };
        
   var removeProduct=function(productId){
      var promise=$http.delete("http://localhost:7000/api/products/"+productId);
            promise.success(function (data, status, headers, config) {
            console.log("Successfully Removed Product " + product.ProductId);
                console.log(data);
            })
           promise.error(function (data, status, headers, config) {
            console.log("Error" + JSON.stringify({data:data}));
            })
        };

        return {
            getAll: getAllProducts,
            get:getProductById,
            update:updateProduct,
            remove:removeProduct,
            create:createProduct
        };
    };

    var module = angular.module("transflower");
    module.factory("producthub", producthubService);
}());