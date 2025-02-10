

function log(s) {
  $("#hello").append(s + "<br/>");
}

function Customer(name, company) { 
  this.name = name;
  this.company = company;
  this.mailServer = "mail.google.com",
  this.send = function (email) { 
  log("Sending email to: " + email + " via " + this.mailServer + " for " + this.name    
     );  
};
}


Customer.prototype.mailServer = "mail.google.com";

var cust = new Customer("Narendra");
log(cust.name);
cust.send("tfl.accounts@transflower.in"); // WORKS
cust.mailserver="test.google.com";
log(cust.mailserver);
cust.mailserver="test1.google.com";
log(cust.mailserver);
var cust1= new Customer();
cust1.mailserver="If it is a prototype property each instance have to provide the values";
log(cust1.mailserver);
//Customer.prototype.mailServer = "ttt";
//log(Customer.prototype.mailServer);

function GoldCustomer()
{
  this.specialPrivileges ='read write';
}

GoldCustomer.prototype = Customer;

var goldCustomer = new GoldCustomer('gold','customer1');
log(goldCustomer.name);