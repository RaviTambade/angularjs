## Javascript DataTypes

JavaScript supports various data types that are fundamental for working with different kinds of values in a program. Understanding these data types is essential for writing effective JavaScript code. Here are the essential data types in JavaScript:

1. **Primitive Data Types**:
   - **Number**: Represents numeric values, including integers and floating-point numbers.
     ```javascript
     let num = 10;
     let pi = 3.14;
     ```

   - **String**: Represents textual data enclosed within single ('') or double ("") quotes.
     ```javascript
     let name = 'John';
     let message = "Hello, world!";
     ```

   - **Boolean**: Represents a logical value of true or false.
     ```javascript
     let isTrue = true;
     let isFalse = false;
     ```

   - **Undefined**: Represents the absence of a value or uninitialized variables.
     ```javascript
     let x; // x is undefined
     ```

   - **Null**: Represents the intentional absence of any value or the null value.
     ```javascript
     let y = null;
     ```

   - **Symbol (ES6+)**: Represents a unique and immutable value that may be used as an identifier for object properties.
     ```javascript
     const key = Symbol('key');
     ```

2. **Non-Primitive (Reference) Data Types**:
   - **Object**: Represents a collection of key-value pairs where values can be of any data type.
     ```javascript
     let person = { name: 'John', age: 30 };
     ```

   - **Array**: Represents an ordered list of values, typically of the same type.
     ```javascript
     let numbers = [1, 2, 3, 4, 5];
     ```

   - **Function**: Represents reusable blocks of code that perform a specific task.
     ```javascript
     function greet(name) {
         return "Hello, " + name + "!";
     }
     ```

   - **Date**: Represents dates and times.
     ```javascript
     let today = new Date();
     ```

JavaScript is a dynamically typed language, meaning you do not need to specify the data type of a variable explicitly. JavaScript automatically determines the data type of a variable based on the value assigned to it. Understanding JavaScript data types and their behavior is crucial for writing robust and efficient JavaScript code.
