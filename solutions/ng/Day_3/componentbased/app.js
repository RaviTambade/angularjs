var app = angular.module('transflower', ['itemsServiceModule']);



var StudentController=function($scope){ 
    $scope.student={name:"Ravi", age:42};
    console.log($scope.student);
}

var ProductController=function($scope){
     $scope.product={name:"Gerbera", price:4};console.log($scope.product);
     $scope.ShowData=function(){
        console.log("External function is invoked !");
     }
}

var ItemsListController=function($scope){
     console.log($scope.ctrl.items[0].name);
     
}
app.controller('ItemsListController',ItemsListController);

app.controller('StudentController',StudentController);
app.controller('ProductController',ProductController);

var ItemsController=function(ItemsService)
{
    var items = ItemsService.fetchAll(),
      self = this;

    // init
    updateItems();

    function updateItems(filteredItems) {
      var collection = filteredItems || items;
      self.activeItems = _.filter(collection, function(item) {
        return item.active;
      });
      
      self.inactiveItems = _.filter(collection, function(item) {
        return !item.active;
      });
    }

    this.switchStatus = function(item) {
      item.active = !item.active;
      items = ItemsService.update(item);
      updateItems();
    };

    this.updateFilter = function(val, activeOnly) {
      if (!val) {
        updateItems();
        return;
      }

      var filteredItems = items.filter(function(item) {
        return (activeOnly && !item.active) || item.name.indexOf(val) === 0;
      });

      updateItems(filteredItems);
    };

}
app.controller('ItemsContainerController', ['ItemsService',ItemsController]);


/****************** Custom Directives ****************************************** */

 var dirHelloWorld= function () {
    return {
        template: "Hello Transflower!"
    }
};




var dirStudentDetail=function () {
    return {
        template: " Name :{{student.name}}  <br/> Age: {{student.age}} <br/> Company: {{company}}",
        replace: false,
        restrict: 'E',
        scope : true ,
        controller: function ($scope) {
            $scope.company="Transflower";
            console.log($scope);
        }
    }
};


var dirInventoryProduct=function () {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            price:'@'
        },
        template: '<p>Title: {{name}}</p> <p>Unitprice: {{price}} $</p>'
    };
}

var dirInventoryProductobj=function () {
    return {
        restrict: 'E',
        scope: {
            data: '='
        },
        template: '<p>Title: {{data.name}}</p> <p>Unitprice: {{data.price}} $</p>'
    };
};

var dirInventoryProductevnt=function () {
    return {
        restrict: 'E',
        scope: {
             data: '=',
            onData: '&',         
        },
        template: '<p>Title: {{data.name}}</p> <p>Unitprice: {{data.price}} $</p>'
    };
}




var dirItem=function() {
  return {
            scope: {
                    item: '=set',
                    onClick: '&'
            },
            controller: function() {},
            controllerAs: 'ctrl',
            bindToController: true,
            restrict: 'EA',
            templateUrl: 'item-detail.html'
        }
}


var dirItemsList=function() {
  return {
    scope: {
            title: '@',
            items: '=',
            onClick: '&'
    },
    restrict: 'EA',
    controller:ItemsListController,
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'items-list.html'
  }
}

var dirItemsContainer=function() {
  return {
    controller: 'ItemsContainerController',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: 'items-container.html'
  };
}

var dirSearchBox=function() {
  return {
    scope: {
            onChange: '&'
    },
    controllerAs: 'ctrl',
    controller: function() {},
    bindToController: true,
    templateUrl: 'search-box.html'
  };
}





app.directive('helloWorld',dirHelloWorld);









app.directive('studentdetail', dirStudentDetail);
app.directive('inventoryProductobj',dirInventoryProductobj );
app.directive('inventoryProductevnt',dirInventoryProductevnt );
app.directive('inventoryProduct',dirInventoryProduct);
app.directive('itemsContainer',dirItemsContainer );
app.directive('searchBox',dirSearchBox );
app.directive('item',dirItem );
app.directive('itemsList',dirItemsList );