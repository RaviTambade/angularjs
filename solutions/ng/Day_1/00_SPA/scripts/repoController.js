(function(){
  
var app=angular.module('transflower');

var repoController=function($scope,$routeParams,github){
  
  var onRepos = function(data) {
    $scope.repos = data;
  };

  var onError = function(reason) {
    $scope.message = "something gone wrong";
  };
  
  var username=$routeParams.username;
  var reponame=$routepara.reponame;
  
  console.log(username + "  "+ reponame);
  github.getRepoDetails(username,reponame)
  .then(onRepos,onError);
  
  
};
app.controller("RepoController",repoController);
}
());
