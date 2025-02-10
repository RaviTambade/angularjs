(function(angular) {
  'use strict';
function ProductDetailController() {

}

var productDetailComponent={
                            templateUrl: 'productDetail.html',
                            controller: ProductDetailController,
                            bindings: {
                                product: '='
                            }
}
angular.module('tflApp').component('productDetail', productDetailComponent);
})(window.angular);
