 

var x = 0; // creates variable x that holds a number

var isNumber = typeof x == "number"; // Works but limited

x = new Object(){}; // no problem, redefines x with new type

console.log(x);


// Accepts any object
// (must implement Feed function)
function Feed(ani) { ani.Feed(); }

// Accepts any object
// (must implement Move method)
function Move(object) { object.Move(); } 