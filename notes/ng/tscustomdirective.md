# Custom Directive

To use a custom directive controller in AngularJS (1.x) with TypeScript, you can follow these steps:

### Step-by-Step Process to Create a Custom Directive with a Controller in AngularJS with TypeScript

### Step 1: Install Dependencies

Ensure that you have the necessary dependencies installed for AngularJS and TypeScript:

```bash
npm install --save angular
npm install --save-dev @types/angular
```

### Step 2: Define the Custom Directive with a Controller

In AngularJS, directives can have their own controller, which manages the logic of that directive. You can use a custom directive with a controller in TypeScript like so:

#### Example Custom Directive with Controller:

```typescript
// src/app/directives/myDirective.ts
namespace app.directives {
  // The directive controller
  export class MyDirectiveController {
    public message: string;

    constructor() {
      this.message = 'Hello from the directive controller!';
    }

    public changeMessage(): void {
      this.message = 'Message changed!';
    }
  }

  // The directive definition
  export function myDirective(): ng.IDirective {
    return {
      restrict: 'E', // Restrict the directive to element type only
      template: `<div>
                  <p>{{ ctrl.message }}</p>
                  <button ng-click="ctrl.changeMessage()">Change Message</button>
                 </div>`,
      controller: MyDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true // Bind the controller to the directive's scope
    };
  }

  // Register the directive with the AngularJS module
  angular.module('app').directive('myDirective', myDirective);
}
```

### Explanation:
- **Controller (`MyDirectiveController`)**: This controller is used for managing the logic of the directive. In this case, it holds a message and a method to change that message.
- **Directive Definition (`myDirective`)**: The `myDirective` function defines the directive and its behavior:
  - **restrict**: Limits the directive to an element (`E` means element, `A` means attribute, `C` means class).
  - **template**: The HTML template used for the directive.
  - **controller**: Specifies the controller for the directive. Here, it's using `MyDirectiveController`.
  - **controllerAs**: Creates an alias (`ctrl`) for the controller to be used in the template.
  - **bindToController**: Ensures that the controller’s properties are bound to the directive’s scope.

### Step 3: Register the Directive and Controller in the AngularJS Module

Ensure that you create an AngularJS module and register the directive within the module. You can use the following code:

```typescript
// src/app/app.ts
namespace app {
  angular.module('app', []);
}
```

### Step 4: Use the Directive in HTML

Once the directive is created and registered, you can use it in your HTML as an element.

```html
<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
  <meta charset="UTF-8">
  <title>AngularJS Directive with Controller Example</title>
  <script src="node_modules/angular/angular.js"></script>
  <script src="dist/app.js"></script> <!-- Compiled TypeScript file -->
</head>
<body>
  <my-directive></my-directive>
</body>
</html>
```

### Step 5: Compile TypeScript

Make sure to compile your TypeScript files to JavaScript using the TypeScript compiler.

1. **tsconfig.json**:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "system",
    "outDir": "./dist",
    "noImplicitAny": true,
    "removeComments": true,
    "preserveConstEnums": true,
    "sourceMap": true
  }
}
```

2. **Run the TypeScript Compiler**:

```bash
tsc
```

This will output the JavaScript files into the `dist` folder.

### Step 6: Open the HTML in the Browser

Open the HTML file in your browser. You should see the directive rendered, along with a button that changes the message when clicked.

### Final Overview of the Code

#### 1. `MyDirectiveController.ts` (Controller)
```typescript
export class MyDirectiveController {
  public message: string;

  constructor() {
    this.message = 'Hello from the directive controller!';
  }

  public changeMessage(): void {
    this.message = 'Message changed!';
  }
}
```

#### 2. `myDirective.ts` (Directive)
```typescript
export function myDirective(): ng.IDirective {
  return {
    restrict: 'E',
    template: `<div>
                <p>{{ ctrl.message }}</p>
                <button ng-click="ctrl.changeMessage()">Change Message</button>
               </div>`,
    controller: MyDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true
  };
}
```

#### 3. `app.ts` (Module Registration)
```typescript
angular.module('app', []);
```

#### 4. HTML Template:
```html
<my-directive></my-directive>
```

### Conclusion:
This demonstrates how to use a custom directive with a controller in AngularJS 1.x with TypeScript. You define the controller and directive, specify the behavior, and then register them with the AngularJS module. The directive can then be used in your HTML template with AngularJS’s dependency injection. The controller inside the directive handles its own logic and binds data, which is then displayed in the view.