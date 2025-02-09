

function log(s) {
  $("#hello").append(s + "<br/>");
}

var s = "String";       // Simple Strings
var t = 'String';       // Either delimiter

var u = "One" + "Two";  // Immutable
log(u);
var single = u[4];      // 'T'

log(u.length);          // 6
var d = "????????";          // Unicode
log(d.length);          // 8 (count of 8 bits)