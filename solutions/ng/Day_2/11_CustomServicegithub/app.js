var app = angular.module('transflower', []);
var customers = [
            { CustomerId: 1001, FirstName: 'Reema', LastName: 'Kapoor', Address: 'Delhi', Email: 'reema.kapoor@gmail.com', MobileNo: '9874521211', RegistrationDate: '2012-3-1 21:32:10', Location: {Longitude:23,Latitude:24} },
            { CustomerId: 1002, FirstName: 'Ritesh', LastName: 'Sharma', Address: 'Latur', Email: 'ritesh.sharma@yahoo.com', MobileNo: '9874521212', RegistrationDate: '2013-2-2 12:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1003, FirstName: 'Ganesh', LastName: 'Varma', Address: 'Nashik', Email: 'ganesh.varma@live.com', MobileNo: '9856325698', RegistrationDate: '2014-5-23 13:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1004, FirstName: 'Seeta', LastName: 'More', Address: 'Kolhapur', Email: 'seeta.more@hotmail.com', MobileNo: '8745214525', RegistrationDate: '2012-6-11 14:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1005, FirstName: 'Manoj', LastName: 'Jadhav', Address: 'Satara', Email: 'manoj.jadhav@rediffmail.com.com', MobileNo: '9874563214', RegistrationDate: '2013-4-13 16:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1006, FirstName: 'Kiran', LastName: 'Shinde', Address: 'Pune', Email: 'kiran.shinde@hotamil.com', MobileNo: '8745874521', RegistrationDate: '2013-4-9 17:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1007, FirstName: 'Jyoti', LastName: 'Kale', Address: 'Mumbai', Email: 'jyoti.kale@outlook.com', MobileNo: '9874569874', RegistrationDate: '2014-3-8 18:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1008, FirstName: 'Raveena', LastName: 'Nene', Address: 'Nagar', Email: 'raveena.nene@hotmail.com', MobileNo: '9633698521', RegistrationDate: '2015-10-19 9:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1009, FirstName: 'Ramesh', LastName: 'Patil', Address: 'Nagpur', Email: 'ramesh.patil@gmail.com', MobileNo: '8899887745', RegistrationDate: '2015-9-29 8:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1010, FirstName: 'Raj', LastName: 'Patel', Address: 'Surat', Email: 'raj.patel@yahoo.com', MobileNo: '8526942175', RegistrationDate: '2014-7-27 7:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1011, FirstName: 'Sachin', LastName: 'Modi', Address: 'Chennai', Email: 'sachin.modi@rediffmail.com', MobileNo: '8745879658', RegistrationDate: '2000-8-18 6:32:10', Location: { Longitude: 23, Latitude: 24 } },
            { CustomerId: 1012, FirstName: 'Mayur', LastName: 'Kholi', Address: 'Bangalore', Email: 'mayur.kholi@yahoo.com', MobileNo: '9651420014', RegistrationDate: '2010-6-2 23:32:10', Location: { Longitude: 23, Latitude: 24 } }
        ];



var mainController = function($scope, customerhub, $interval, $log, $anchorScroll, $location) {

  var onUserComplete = function(data) {
    $scope.user = data;
    $location.hash("userDetails");
    $achorScroll();
  };


  var onRepose = function(data) {
    $scope.repose = data;
    $location.hash("userDetails");
    $achorScroll();
  };

  var onError = function(reason) {
    $scope.message = "something gone wrong";
  };

  var countDownTimer = null;

  $scope.search = function(username) {
    
    $log.info("searching user " + $scope.username);
   
    
    github.getUser(username).then(onUserComplete, onError);
    if (countDownTimer) {
      $interval.cancel(countDownTimer);
      $scope.counter = null;
    }
  };

  var decrementCountDown = function() {
    $scope.counter -= 1;
    if ($scope.counter < 1) {
      $scope.search($scope.username);
    }
  };

  var startCountDown = function() {
    countDownTimer = $interval(decrementCountDown, 1000, $scope.counter);
  };

  $scope.counter = 5;
  $scope.username = "robconery";
  $scope.message = "Hello Transflower";
  startCountDown();
};
app.controller("MainController", mainController);