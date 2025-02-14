var app = angular.module('transflower', []);
var mainController = function($scope, $http, $interval, $log,$anchorScroll,$location) {

  var onUserComplete = function(response) {
    $scope.user = response.data;
    $location.hash("userDetails");
    $achorScroll();
  };

  var onError = function(reason) {
    $scope.message = "something gone wrong";
  };

  var countDownTimer = null;
  $scope.search = function(username) {
    $log.info("searching user " + $scope.username);
    $http.get("https://api.github.com/users/" + username).then(onUserComplete, onError);
    if (countDownTimer) {
      $interval.cancel(countDownTimer);
      $scope.counter=null;
    }
  };

  var decrementCountDown = function() {
    $scope.counter -= 1;
    if ($scope.counter < 1) {
      $scope.search($scope.username);
    }
  };

  var startCountDown = function() {
  countDownTimer=$interval(decrementCountDown, 1000, $scope.counter);
  };

  $scope.counter = 9;
  $scope.username = "robconery";
  $scope.message = "Hello Transflower";
  startCountDown();
};

app.controller("MainController", mainController);