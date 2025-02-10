// JavaScript source code

function log(s) {
    console.log(s);
}

// JavaScript Function Overloading
//************************************************************

//======================================================================
//arguments object
//Declaring parameter doesn't matter here.
//Available Inside Function Body Only
// JavaScript 
function show() {
    //log(arguments.length);
  for (var x = 0; x < arguments.length; x++) {
        log(arguments[x]);
    }
    
}

show(1); // 1 
show(1, 2); // 2 
show('1a', '2b', '3c'); // 3
log(foo());