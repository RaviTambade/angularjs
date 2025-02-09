

function log(s) {
  console.log(s);
  
}

if (true) { log('true'); }    // true
if (false) { log('true'); }   // false
if ("hello") { log('truewww'); } // true
if ('') { log('truessss'); }      // false
if (25) { log('true'); }      // true
if (0) { log('true'); }       // false
if (10/0) { log('true'); }    // false (NaN)

var a = null;
if (a) { log('true'); }       // false
if (c) { log('true'); }       // false (undefined)
