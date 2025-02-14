'use strict';

var addition=function(num1, num2){
  return num1+num2;
}

describe('sorting the list of users', function() {
  it('Test add function', function() {
    
    var sorted = addition(12,24);
    expect(sorted).toEqual(36);
  });
});


describe('sorting the list of users', function() {
  it('sorts in descending order by default', function() {
    var users = ['jack', 'igor', 'jeff'];
    var name = users[0];
    expect(name).toEqual('jack');
  });
});



describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});