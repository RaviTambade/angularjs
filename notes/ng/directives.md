In **AngularJS**, **directives** are special markers (attributes, elements, classes, or comments) in the HTML that allow you to extend HTML with new behavior and custom functionality. They are one of the core features of AngularJS, enabling the creation of reusable components, DOM manipulations, and custom behavior in the user interface.

### Key Points about Directives:

1. **Extend HTML with new syntax**: Directives allow you to define custom HTML tags or attributes that are associated with specific AngularJS functionality.
   
2. **Manipulate the DOM**: Directives can be used to manipulate the DOM directly, attach event listeners, and bind data to elements.

3. **Encapsulation**: Directives provide a way to encapsulate and reuse logic and behavior, making your code modular and maintainable.

4. **Customization**: Directives allow developers to create their own HTML-like components with custom behavior.

---

### Types of Directives in AngularJS:

1. **Built-in Directives**:
   AngularJS comes with several built-in directives that provide essential functionality. Some of the common built-in directives include:
   
   - **`ng-app`**: This directive defines the root element of an AngularJS application.
   - **`ng-model`**: It binds the value of an input field to a property in the scope (for two-way data binding).
   - **`ng-repeat`**: It is used for repeating an HTML element for each item in an array or object (like a loop).
   - **`ng-if`**: It conditionally includes or removes an element from the DOM.
   - **`ng-show` / `ng-hide`**: These directives control the visibility of an element.
   - **`ng-click`**: It binds a click event to an element, executing an AngularJS expression.

   Example:
   ```html
   <div ng-repeat="item in items">{{ item.name }}</div>
   ```

2. **Custom Directives**:
   In addition to the built-in directives, you can create your own custom directives. These directives are useful when you need to encapsulate behavior into reusable components.

### Creating Custom Directives in AngularJS:

To create a custom directive, you use the `directive` function provided by AngularJS. The general syntax is as follows:

```javascript
angular.module('myApp', [])
  .directive('myCustomDirective', function() {
    return {
      restrict: 'E', // 'E' for element, 'A' for attribute, 'C' for class, 'M' for comment
      template: '<div>This is a custom directive!</div>',
      link: function(scope, element, attrs) {
        // Custom behavior can go here
        element.css('color', 'blue');
      }
    };
  });
```

### Example: Creating a Custom Directive

Let's create a simple custom directive that adds a red border to any element:

```javascript
angular.module('myApp', [])
  .directive('redBorder', function() {
    return {
      restrict: 'A',  // 'A' means it's used as an attribute
      link: function(scope, element, attrs) {
        element.css('border', '2px solid red');
      }
    };
  });
```

Now, you can use this custom directive in your HTML like this:

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="app.js"></script>
</head>
<body>

  <div red-border>Content with red border</div>

</body>
</html>
```

In this example:
- The directive `redBorder` is used as an **attribute** (`red-border`).
- It applies a red border to any HTML element it is attached to.

### Explanation of the Directive Object:

The object returned by the directive function can have the following properties:

1. **`restrict`**: Specifies how the directive can be used (as an element, attribute, class, or comment).
   - `'E'` for elements (e.g., `<my-directive></my-directive>`).
   - `'A'` for attributes (e.g., `<div my-directive></div>`).
   - `'C'` for classes (e.g., `<div class="my-directive"></div>`).
   - `'M'` for comments (e.g., `<!-- directive: my-directive -->`).

2. **`template`**: Defines the HTML template for the directive. This template will replace the directive element in the DOM.

3. **`link`**: The `link` function is where you can manipulate the DOM directly or add event listeners. It is called after the template is processed, and it provides access to `scope`, `element`, and `attrs`.

4. **`controller`**: Optionally, you can define a controller for your directive, which can be used for shared functionality in multiple directives.

5. **`scope`**: You can control how the directive interacts with the parent scope. For example, you can create isolated scopes for the directive or share the scope with the parent.

---

### Example of Directive with Isolated Scope:

You can also use directives to create isolated scopes, which means the directive has its own scope and doesn't inherit the parent scope.

```javascript
angular.module('myApp', [])
  .directive('greeting', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@' // Accepts an attribute called 'name'
      },
      template: '<div>Hello, {{ name }}!</div>'
    };
  });
```

HTML:
```html
<greeting name="John"></greeting>
```

In this example:
- The `name` attribute passed to the `greeting` directive is isolated from the parent scope, making it independent and avoiding scope conflicts.
- The `@` in the `scope` property means that the `name` will be a string passed from the parent scope.

---

### Summary of Benefits of Directives:

1. **Reusability**: You can create custom, reusable components that can be used throughout the application.
2. **Separation of Concerns**: Logic and presentation are separated, making code easier to maintain and scale.
3. **DOM Manipulation**: Directives allow direct manipulation of the DOM based on AngularJS expressions and logic.
4. **Extend HTML**: Directives can introduce custom HTML elements or attributes, which enhances the expressiveness of your markup.

---

### Conclusion:

Directives in AngularJS are a powerful feature that enables you to extend HTML with custom behaviors and functionality. By creating both custom and using built-in directives, you can build complex UIs in a modular and maintainable way. Directives are key to building reusable components and custom behavior in an AngularJS application.