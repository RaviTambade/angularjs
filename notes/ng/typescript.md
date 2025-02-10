### **TypeScript Essentials**

**TypeScript** is a typed superset of **JavaScript** that adds static types to JavaScript, making it more robust, scalable, and easier to maintain. TypeScript provides a rich type system, compile-time checking, and better tooling support for large applications.

Here’s an overview of **TypeScript essentials**:

---

### 1. **Basic Types**

TypeScript introduces types to JavaScript, which allows for better error checking, improved autocompletion, and better IDE support.

#### 1.1 **Primitive Types**

- **Boolean**: Represents `true` or `false`.
  ```typescript
  let isActive: boolean = true;
  ```

- **Number**: Represents both integer and floating-point numbers.
  ```typescript
  let count: number = 42;
  let pi: number = 3.14;
  ```

- **String**: Represents a sequence of characters.
  ```typescript
  let name: string = 'John';
  ```

- **Array**: Represents a collection of values. TypeScript supports two ways of defining arrays:
  ```typescript
  let numbers: number[] = [1, 2, 3, 4];
  let fruits: Array<string> = ['Apple', 'Banana', 'Cherry'];
  ```

- **Tuple**: A fixed-size array where each element can have a different type.
  ```typescript
  let person: [string, number] = ['Alice', 30];
  ```

- **Enum**: A set of named constants.
  ```typescript
  enum Color {
    Red = 1,
    Green,
    Blue
  }
  let color: Color = Color.Green;
  ```

- **Any**: A type that allows a variable to be assigned any value.
  ```typescript
  let randomValue: any = 10;
  randomValue = 'Hello';
  randomValue = true;
  ```

- **Void**: Used for functions that do not return a value.
  ```typescript
  function logMessage(message: string): void {
    console.log(message);
  }
  ```

- **Null and Undefined**: Represents the absence of value.
  ```typescript
  let notDefined: undefined = undefined;
  let nothing: null = null;
  ```

---

### 2. **Type Inference**

TypeScript can automatically infer types based on the value assigned to a variable, so you don’t always need to explicitly define the type.

```typescript
let name = 'John';  // TypeScript infers this as 'string'
let age = 30;       // TypeScript infers this as 'number'
```

---

### 3. **Type Aliases**

Type aliases allow you to define custom types using the `type` keyword.

```typescript
type Point = { x: number, y: number };
let point: Point = { x: 10, y: 20 };
```

---

### 4. **Interfaces**

Interfaces define the structure of an object or class, specifying the types of properties or methods it must have.

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'John',
  age: 30
};
```

- **Optional properties**: Use the `?` symbol to mark properties as optional.
  ```typescript
  interface Car {
    brand: string;
    model: string;
    year?: number; // Optional property
  }
  ```

- **Read-only properties**: Properties that cannot be modified after initialization.
  ```typescript
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  ```

---

### 5. **Classes**

TypeScript provides support for classes, which is similar to classes in object-oriented programming (OOP).

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person = new Person('Alice', 25);
person.greet();
```

- **Inheritance**: TypeScript supports class inheritance, where a class can extend another.
  ```typescript
  class Employee extends Person {
    jobTitle: string;

    constructor(name: string, age: number, jobTitle: string) {
      super(name, age);
      this.jobTitle = jobTitle;
    }

    greet() {
      console.log(`Hello, my name is ${this.name} and I work as a ${this.jobTitle}`);
    }
  }
  ```

---

### 6. **Access Modifiers**

TypeScript allows you to control the visibility of class members using **public**, **private**, and **protected** modifiers.

- **public**: The default visibility, meaning the member is accessible anywhere.
- **private**: The member is only accessible within the class itself.
- **protected**: The member is accessible within the class and its subclasses.

```typescript
class Employee {
  private id: number;
  public name: string;
  protected role: string;

  constructor(id: number, name: string, role: string) {
    this.id = id;
    this.name = name;
    this.role = role;
  }
}
```

---

### 7. **Generics**

Generics allow you to create reusable components or functions that can work with any data type.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello World');
```

Generics can be used with classes and interfaces as well.

```typescript
class Box<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}

let stringBox = new Box<string>('Hello');
let numberBox = new Box<number>(123);
```

---

### 8. **Functions**

Functions in TypeScript are very similar to JavaScript functions, but with added type annotations.

#### 8.1 **Function Declaration**

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

#### 8.2 **Optional Parameters**

```typescript
function greet(name: string, age?: number): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
```

#### 8.3 **Default Parameters**

```typescript
function greet(name: string, age: number = 25): void {
  console.log(`Hello ${name}, you are ${age} years old.`);
}
```

#### 8.4 **Rest Parameters**

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
```

---

### 9. **Modules and Namespaces**

TypeScript uses modules to organize code into separate files. These modules can be imported and exported to share functionality across files.

#### 9.1 **Exporting a Module**

```typescript
export class Person {
  constructor(public name: string, public age: number) {}
}

export function greet(person: Person): void {
  console.log(`Hello, ${person.name}`);
}
```

#### 9.2 **Importing a Module**

```typescript
import { Person, greet } from './person';

let person = new Person('Alice', 30);
greet(person);
```

- **Namespaces**: TypeScript supports **namespaces** for organizing code into logical groups. However, **modules** are preferred in modern TypeScript development.

---

### 10. **Type Assertion**

Type assertion is a way to tell the compiler about the type of a variable when it can't infer it. It does not change the type at runtime.

```typescript
let someValue: any = 'Hello, world!';
let strLength: number = (someValue as string).length;
```

You can use `as` or angle brackets (`<type>`).

```typescript
let strLength: number = (<string>someValue).length;
```

---

### 11. **Type Compatibility**

TypeScript uses **structural typing**, meaning types are compatible based on their structure rather than their name. This is different from traditional **nominal typing** used in languages like Java or C#.

```typescript
interface Person {
  name: string;
}

let person: Person = { name: 'Alice' };

let anotherPerson = { name: 'Bob' };  // This works because the structure matches.
```

---

### Conclusion

TypeScript enhances JavaScript by introducing **static typing**, **interfaces**, **generics**, **modules**, and **classes**, making it easier to manage large-scale applications. It helps developers catch errors at compile-time, improve code quality, and provides better tooling support (e.g., autocompletion, refactoring) in modern editors.

Mastering TypeScript essentials like basic types, interfaces, classes, functions, and generics is crucial for building scalable and maintainable applications.