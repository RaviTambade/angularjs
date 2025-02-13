(function(){ 
var app=angular.module('transflower');

var repoController=function($scope,$routeParams){
  var username=$routeParams.username;
  var reponame=$routepara.reponame;

  var onRepos = function(data) {
    $scope.repos = data;
  };

  var onError = function(reason) {
    $scope.message = "something gone wrong";
  };

  console.log(username + "  "+ reponame);
};
app.controller("RepoController",repoController);
}
());
