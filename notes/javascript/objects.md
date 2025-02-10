## Javascript Objects
In JavaScript, objects are one of the most important and versatile data structures. They allow you to store collections of key-value pairs, where each key is a unique identifier for a value. Objects can represent real-world entities, data structures, or even functions. Here's an overview of objects in JavaScript:

### Object Declaration:

Objects in JavaScript are created using curly braces `{}`. Inside the curly braces, you define properties and their corresponding values using a colon `:` to separate the key (property name) from the value.

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

### Accessing Object Properties:

You can access properties of an object using dot notation (`objectName.propertyName`) or bracket notation (`objectName['propertyName']`).

```javascript
console.log(person.name); // Outputs: John
console.log(person['age']); // Outputs: 30
```

### Adding and Modifying Properties:

You can add new properties or modify existing ones by assigning values to them.

```javascript
person.job = "Developer";
person.age = 31;
```

### Nested Objects:

Objects can contain other objects as properties, allowing you to create nested data structures.

```javascript
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner: {
        name: "Alice",
        age: 25
    }
};
```

### Object Methods:

Objects can also contain functions as properties. These functions are called methods.

```javascript
let person = {
    name: "John",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Outputs: Hello, my name is John
```

### Object Iteration:

You can iterate over the properties of an object using `for...in` loop or `Object.keys()` and `Object.values()` methods.

```javascript
for (let key in person) {
    console.log(key + ": " + person[key]);
}

let keys = Object.keys(person);
console.log(keys); // Outputs: ["name", "age", "city", "job"]
```

### Object Destructuring:

Object destructuring allows you to extract properties from an object and assign them to variables.

```javascript
let { name, age } = person;
console.log(name, age); // Outputs: John 31
```

### Object Prototypes and Classes:

JavaScript is a prototype-based language. Objects in JavaScript are instances of classes (or constructor functions) or directly created using object literals.

```javascript
// Using constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person("John", 30);

// Using class (introduced in ES6)
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

let myCar = new Car("Toyota", "Camry");
```

### Object Property Shorthand:

When creating objects using variables of the same name, you can use property shorthand.

```javascript
let name = "John";
let age = 30;

let person = { name, age };
console.log(person); // Outputs: { name: "John", age: 30 }
```

Objects in JavaScript are incredibly versatile and are used extensively in both frontend and backend development. Understanding how to work with objects is crucial for becoming proficient in JavaScript programming.