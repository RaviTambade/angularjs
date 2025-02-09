

function log(s) {
  consol.log(s);
}

function SmtpClient() {
}

SmtpClient.prototype.send = function(msg) { 
  var defaults = {
    to: "ravi.tambade@transflower.in",
    mailServer: "smtp.transflower.in",
    from: "rahul.navale@gmail.com"
  };
  
  $.extend(defaults, msg); // jQuery

  log("Sent to: " + defaults.to);
  log("From: " + defaults.from);
  log("Via: " + defaults.mailServer);
  
  if (defaults.complete) {
    defaults.error("worked");
  }
};

var svr = new SmtpClient();

svr.send({ 
  from: "ravi.tambade@transflower.in",
  to: "shiv.kumar@outlook.com",
  body: "Hello",
  subject: "Test Msg",
  complete: function (r) {
    log("Success: " + r);
  },
  error: function (e) {
    log("Failed: " + e);
  }
});


