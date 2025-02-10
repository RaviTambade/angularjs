var app = angular.module('transflower', ['itemsServiceModule']);


app.directive('helloWorld', function () {
    return {
        template: "Hello IG"
    };
});


app.directive('studentdetail', function () {
    return {
        template: "{{student.name}} is {{student.age}} years old  Company is {{company}} !!",
      //   template: "Student Details",
         replace: false,
        restrict: 'E',
        scope : true ,
        controller: function ($scope) {
            $scope.company="Transflower";

            console.log($scope);
        }
    }
});

 app.directive('inventoryProduct', function () {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            price:'@'
        },
        template: '{{name}} costs {{price}} $Change name'
    };
});

//

app.directive('inventoryProductobj', function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        template: '{{data.name}} costs {{data.price}} $Change name'
    };
});


app.directive('inventoryProductevnt', function () {
    return {
        restrict: 'E',
        scope: {
             data: '=',
            onData: '&',         
        },
        template: '{{data.name}} costs {{data.price}} $Change name'
    };
});




app.directive('itemsContainer', function() {
  return {
    controller: 'ItemsContainerController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'items-container.html'
  };
});


app.directive('searchBox', function() {
  return {
    scope: {
      onChange: '&'
    },
    controllerAs: 'ctrl',
    controller: function() {},
    bindToController: true,
    templateUrl: 'search-box.html'
  };
});

app.directive('item', function() {
  return {
    scope: {
      item: '=set',
      onClick: '&'
    },
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    restrict: 'EA',
   /* template: '<input type="checkbox" ng-click="ctrl.onClick({item: ctrl.item})" ng-checked="ctrl.item.active" /> {{ ctrl.item.description }}'*/
  templateUrl: 'item-detail.html'
}
});

app.directive('itemsList', function() {
  return {
    scope: {
      title: '@',
      items: '=',
      onClick: '&'
    },
    restrict: 'EA',
    controller: function() {},
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'items-list.html'
  }
});