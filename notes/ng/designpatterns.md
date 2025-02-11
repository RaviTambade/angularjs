# Using Design Patterns in Typescript
Design patterns are reusable solutions to common problems in software design. They help to solve problems in a flexible and efficient way, and using them can improve code maintainability, readability, and scalability.

In **TypeScript**, we can implement common design patterns just like in JavaScript, but TypeScript’s static typing features allow us to implement them more safely and with better tooling (e.g., autocompletion, type checks, and error prevention). Below are some common design patterns and how to implement them in TypeScript.

### 1. **Singleton Pattern**

The **Singleton** pattern ensures that a class has only one instance and provides a global point of access to that instance.

#### Example:
```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  // Public method to get the instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log("Singleton method called");
  }
}

// Usage
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.someMethod();

console.log(singleton1 === singleton2); // true (same instance)
```

### 2. **Factory Pattern**

The **Factory** pattern provides a way to create objects without specifying the exact class of object that will be created. It’s often used when you need to create objects from a family of related classes.

#### Example:
```typescript
interface Product {
  use(): void;
}

class ConcreteProductA implements Product {
  public use(): void {
    console.log("Using ConcreteProductA");
  }
}

class ConcreteProductB implements Product {
  public use(): void {
    console.log("Using ConcreteProductB");
  }
}

class Creator {
  public static createProduct(type: string): Product {
    if (type === 'A') {
      return new ConcreteProductA();
    } else if (type === 'B') {
      return new ConcreteProductB();
    }
    throw new Error("Unknown product type");
  }
}

// Usage
const productA = Creator.createProduct('A');
productA.use(); // "Using ConcreteProductA"

const productB = Creator.createProduct('B');
productB.use(); // "Using ConcreteProductB"
```

### 3. **Observer Pattern**

The **Observer** pattern defines a one-to-many dependency between objects, so when one object changes its state, all dependent objects are notified and updated automatically.

#### Example:
```typescript
// Observer Interface
interface Observer {
  update(message: string): void;
}

// Subject class
class Subject {
  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notify(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

// Concrete Observer
class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(message: string): void {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Usage
const subject = new Subject();
const observer1 = new ConcreteObserver("Observer1");
const observer2 = new ConcreteObserver("Observer2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello Observers!"); 
// Observer1 received message: Hello Observers!
// Observer2 received message: Hello Observers!
```

### 4. **Decorator Pattern**

The **Decorator** pattern allows you to dynamically add behavior to an object without modifying its structure. It’s a way of extending functionality of objects at runtime.

#### Example:
```typescript
interface Coffee {
  cost(): number;
}

class BasicCoffee implements Coffee {
  public cost(): number {
    return 5;
  }
}

class MilkDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public cost(): number {
    return this.coffee.cost() + 2; // Adds cost of milk
  }
}

class SugarDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public cost(): number {
    return this.coffee.cost() + 1; // Adds cost of sugar
  }
}

// Usage
let coffee = new BasicCoffee();
console.log(coffee.cost()); // 5

coffee = new MilkDecorator(coffee);
console.log(coffee.cost()); // 7

coffee = new SugarDecorator(coffee);
console.log(coffee.cost()); // 8
```

### 5. **Strategy Pattern**

The **Strategy** pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. The strategy allows the algorithm to be selected at runtime.

#### Example:
```typescript
// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete Strategy A: CreditCard
class CreditCardPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paying $${amount} using Credit Card.`);
  }
}

// Concrete Strategy B: PayPal
class PayPalPayment implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paying $${amount} using PayPal.`);
  }
}

// Context class
class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public executePayment(amount: number): void {
    this.strategy.pay(amount);
  }
}

// Usage
const creditCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();

const paymentContext = new PaymentContext(creditCardPayment);
paymentContext.executePayment(100); // Paying $100 using Credit Card.

paymentContext.setStrategy(payPalPayment);
paymentContext.executePayment(200); // Paying $200 using PayPal.
```

### 6. **Command Pattern**

The **Command** pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations.

#### Example:
```typescript
// Command Interface
interface Command {
  execute(): void;
}

// Concrete Command
class LightOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.turnOn();
  }
}

// Receiver Class
class Light {
  public turnOn(): void {
    console.log("The light is ON");
  }

  public turnOff(): void {
    console.log("The light is OFF");
  }
}

// Invoker
class RemoteControl {
  private command: Command;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public pressButton(): void {
    this.command.execute();
  }
}

// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const remoteControl = new RemoteControl();

remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // The light is ON
```

### 7. **Adapter Pattern**

The **Adapter** pattern allows incompatible interfaces to work together by creating an adapter class that converts one interface into another expected by the client.

#### Example:
```typescript
// Old interface
interface OldSystem {
  oldMethod(): void;
}

// New interface
interface NewSystem {
  newMethod(): void;
}

// Old class implementation
class OldSystemImplementation implements OldSystem {
  public oldMethod(): void {
    console.log("Old method");
  }
}

// Adapter class
class Adapter implements NewSystem {
  private oldSystem: OldSystem;

  constructor(oldSystem: OldSystem) {
    this.oldSystem = oldSystem;
  }

  public newMethod(): void {
    this.oldSystem.oldMethod();
  }
}

// Usage
const oldSystem = new OldSystemImplementation();
const adapter = new Adapter(oldSystem);

adapter.newMethod(); // Old method
```

### Conclusion:
In **TypeScript**, design patterns can be implemented just like in JavaScript, but with the added benefit of type safety and static typing features. TypeScript helps make your code more maintainable and less error-prone by leveraging interfaces, generics, and strong typing.

Here are the key steps to implement design patterns in TypeScript:
- **Use interfaces** to define common functionality.
- **Leverage classes** to implement concrete solutions.
- **Utilize TypeScript features** like generics, access modifiers, and static types for better maintainability and scalability.

By understanding and applying design patterns in TypeScript, you can write cleaner, more modular, and flexible code.