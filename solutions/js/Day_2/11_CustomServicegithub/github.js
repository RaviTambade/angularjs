(function() {
     var githubService = function($http) {
     var getUserDetails = function(username) {
         return $http.get("https://api.github.com/users/" + username)
          .then(function(response) {
            return response.data;
          });
      };
      var getRepos = function(user) {
         return $http.get(user.repos_url)
          .then(function(response) {
            return response.data;
          });
      };

      var adduser=function(user){};
      var removeuser=function(user){};
      var updateuser=function(user){};
     
      return {
        getUser:getUserDetails,
        getRepos:getRepos
      };
    };

    var module = angular.module("transflower");  
    module.factory("github",githubService);
  }
  ());