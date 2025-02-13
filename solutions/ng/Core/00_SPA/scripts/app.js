(function() {
  var app = angular.module("transflower", ["ngRoute"]);
  app.config(function($routeProvider) {
              $routeProvider
                .when("/main", {
                  templateUrl: "views/main.html",
                  controller: "MainController"
                })
                .when("/user/:username",{
                  templateUrl:"views/user.html",
                  controller: "UserController"
                })
                .when("/user/:username/:reponame",{
                  templateUrl:"views/repo.html",
                  controller:"RepoController"
                })
                .otherwise({
                  redirectTo: "/main"
                });
  });
}());