

function log(s) {
  $("#hello").append(s + "<br/>");
}

function sendEmail(r) {
  log("sending mail to: " + r.name + "(" + r.email + ")");
}

var Owner = {
  name: "Ravi",
  email: "ravi.tambade@transflower.in",
  phone: "020-242-26444"
};

sendEmail(Owner); // works

function Customer(name, email) {
  this.name = name;
  this.email = email;
  this.balance = 0;
}

var c = new Customer("Rahul", "rahul.navale@outlook.com");
sendEmail(c); // also works

