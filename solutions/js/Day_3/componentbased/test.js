
// Difference between self and this in javascript


var customer = {
 name: "Sachin",
 show: function() {
    var self = this;
    console.log("outer func:  this.name = " + this.name);
    console.log("outer func:  self.name = " + self.name);
    (function() {
        console.log("inner func:  this.name = " + this.name);
        console.log("inner func:  self.name = " + self.name);
    }());
  }
};
customer.show();