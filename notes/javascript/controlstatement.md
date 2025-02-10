## Javascript  Control statement
Control flow in JavaScript refers to the order in which statements are executed based on certain conditions or loops. JavaScript provides several control flow statements to manage the flow of execution within your code. Here's an overview of the essential control flow statements in JavaScript:

### 1. Conditional Statements:

#### a. `if` Statement:
Executes a block of code if a specified condition is true.

```javascript
let num = 10;
if (num > 0) {
    console.log("Positive");
} else if (num === 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}
```

#### b. `switch` Statement:
Evaluates an expression and executes a block of code depending on the matched case.

```javascript
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple");
        break;
    case "banana":
        console.log("Banana");
        break;
    default:
        console.log("Other");
}
```

### 2. Looping Statements:

#### a. `for` Loop:
Executes a block of code a specified number of times.

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### b. `while` Loop:
Executes a block of code while a specified condition is true.

```javascript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

#### c. `do...while` Loop:
Similar to the `while` loop, but it always executes the block of code at least once before checking the condition.

```javascript
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
```

#### d. `for...in` Loop:
Iterates over the enumerable properties of an object.

```javascript
let person = {
    name: "John",
    age: 30,
    gender: "male"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

#### e. `for...of` Loop (ES6+):
Iterates over iterable objects (arrays, strings, maps, sets, etc.) and provides the values directly.

```javascript
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### 3. Jump Statements:

#### a. `break` Statement:
Terminates the current loop or switch statement and transfers control to the statement immediately following the terminated statement.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

#### b. `continue` Statement:
Skips the current iteration of a loop and continues with the next iteration.

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
```

These are the essential control flow statements in JavaScript that allow you to control the flow of execution in your code based on conditions, loops, and jump statements. Understanding and mastering these control flow statements are essential for writing effective and efficient JavaScript code.
