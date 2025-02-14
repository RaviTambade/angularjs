

function log(s) {
  $("#hello").append(s + "<br/>");
}

var a = [ "one", "two", "three", "wiggle" ];

for (var o in a) {
  log(o);              
}


for (var o in a) {
  log(a[o]);           
}


for (var o = 0; o < a.length; o++) {
  log(a[o]);           
}
