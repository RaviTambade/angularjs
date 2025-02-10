
function log(s) {
  $("#hello").append(s + "<br/>");
}

var x = {
  name: "Ravi",
  city: "Pune"
};

var simpleObject = {
  age: 42,
  height: 184
};

x.phone = "091-020-24226444";
x.makeCall = function () {
  log(this.phone);
};
x.makeAnotherCall = function() {
  this.makeCall();
};

log(x.phone);
x.makeCall();
x.makeAnotherCall();