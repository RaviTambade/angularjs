(function() {

     var customerHubService = function($http) {

      var getCustomerDetails = function(username) {
         return $http.get("https://api.github.com/users/" + username)
          .then(function(response) {
            return response.data;
          });
      };
      var getAllCustomers = function(user) {
        var custs = customers;
        var output = "<ul>";
        for (var i = 0; i < custs.length; i++) {
        var line = "<li>" + custs[i].CustomerId + ' ' + custs[i].FirstName + ' ' + custs[i].LastName + ' ' + custs[i].Address + ' ' + custs[i].Email + ' ' + cust[i].RegistrationDate + "</li>";
        output += line;
    }
    document.write(output + "</ul>");
      };


      var addCustomer=function(user){

      };
      var removeCustomer=function(user){

      };
      var updateCustomer=function(user){

      };
     
      return {
        get:getCustomerDetails,
        getAll:getAllCustomers,
        create: addNewCustomer,
        update:updateCustomer,
        remove:removeCustomer
        
      };
    };

    var customerModule = angular.module("transflower");
    
    customerModule.factory("customerhub",customerHubService);
  }
  ());