

function log(s) {
  $("#hello").append(s + "<br/>");
}

var a = 1;        // integer
var b = 1.5;      // floating point
var c = 080;      // integer (in octal)
var d = 0xffff;   // integer (in hex)
var e = 1.34e6;   // Scientific Notation (1340000)
var f = 10.0;     // integer (optimization)

var g = Number.MIN_VALUE;
log (g)
var h = Number.MAX_VALUE;
log (h)
var i = Number.POSITIVE_INFINITY;
log (i)
var j = Number.NEGATIVE_INFINITY;
log (j)

var fail = 10/0;           // Not a Number (NaN)
var test1 = NaN == NaN;    // false, huh?
var test2 = isNaN(NaN);    // true
var test3 = isNaN(fail);   // true
var test4 = isNaN(10);     // false
var test5 = isNaN("10");   // false
var test6 = isNaN("fail"); // true
