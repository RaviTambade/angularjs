## Javascript  Variables and Constants
In JavaScript, variables are used to store and manipulate data, while constants hold values that cannot be changed after being assigned. Understanding variables and constants is fundamental to writing JavaScript code effectively. Here's an overview of variables and constants in JavaScript:

### Variables:

1. **Declaration**: Variables in JavaScript are declared using the `var`, `let`, or `const` keywords.
   - **var**: Declares a variable with function or global scope. It has been largely replaced by `let` and `const`.
   - **let**: Declares a block-scoped variable that can be reassigned.
   - **const**: Declares a block-scoped constant (read-only) variable that cannot be reassigned.

   ```javascript
   var a = 10;
   let b = 'hello';
   const PI = 3.14;
   ```

2. **Variable Naming Rules**:
   - Variable names can contain letters, digits, underscores (_), and dollar signs ($).
   - Variable names must begin with a letter, underscore (_), or dollar sign ($).
   - Variable names are case-sensitive.
   - JavaScript reserves certain keywords (e.g., `var`, `let`, `const`, `function`, etc.) that cannot be used as variable names.

3. **Scope**:
   - **Global Scope**: Variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
   - **Function Scope**: Variables declared inside a function have function scope and are accessible only within that function.
   - **Block Scope (let and const)**: Variables declared with `let` and `const` have block scope, meaning they are accessible only within the block (enclosed within curly braces {}) where they are defined.

   ```javascript
   var globalVar = 'global'; // Global scope

   function myFunction() {
       var localVar = 'local'; // Function scope
       console.log(globalVar); // Accessible
   }

   console.log(localVar); // Error: localVar is not defined
   ```

### Constants:

1. **Declaration**: Constants are declared using the `const` keyword.
   ```javascript
   const PI = 3.14;
   ```

2. **Value Assignment**: Constants must be assigned a value when declared, and the value cannot be changed afterward.
   ```javascript
   const PI = 3.14;
   PI = 3.14159; // Error: Assignment to constant variable
   ```

3. **Scope**: Constants follow the same scoping rules as variables declared with `let`.

4. **Best Practices**:
   - Use `const` by default when declaring variables, unless you know the value will need to change.
   - Avoid using `var` for declaring variables due to its global or function scope, which can lead to unexpected behavior and bugs.
   - Use descriptive variable names to make your code more readable and maintainable.

Understanding variables and constants and their scoping rules is essential for writing clean, readable, and maintainable JavaScript code.
