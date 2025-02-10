var serviceModule = angular.module('itemsServiceModule', []);

var ItemHubService=function() {
   
    var items = [{ id: 1,name: 'Gerbera',description:'Best Weddling flower', unitPrice:23,quantity:300, active: true}, 
                 { id: 2,name: 'Jasmin',description:'Best Smelling flower',unitPrice:15,quantity:120, active: false},
                 { id: 3,name: 'Carnation',description:'Best Decorative flower',unitPrice:20,quantity:304, active: false}, 
                 { id: 4,name: 'Lotus',description:'Best Worship flower',unitPrice:35,quantity:175, active: true}, 
                 { id: 5,name: 'Marigold',description:'Best festival flower',unitPrice:12,quantity:276, active: false},
                 { id: 6,name: 'Tulip',description:'Best Garden flower',unitPrice:45,quantity:274, active: true}];

    var update=function (searchItem) {
      var found = _.first(items, function(item) {
        return searchItem.id == item.id
      });

      // do nothing
      if (!found) return;
    }
    
    var getAll=function(){
         return items;
    }


    var edit=function(item) {
            var found = find(item);
            if (found) {
              var index = _.indexOf(items, _.find(items, item));
              items.splice(index, 1, item);
            }
            
            return items;
          }

    return {
      $get: function() {
        return {
                fetchAll: getAll,
                update: edit
        }
     }
    }
  }

serviceModule.provider('ItemsService',ItemHubService);