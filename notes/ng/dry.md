The **DRY** (Don't Repeat Yourself) principle is a software design principle aimed at reducing duplication of code. The idea is that every piece of knowledge or logic should have a single, unambiguous representation within a system. By applying DRY, you reduce the risk of errors, inconsistencies, and make maintenance easier.

In **AngularJS**, applying the DRY principle means refactoring code so that repeated logic is centralized in services, directives, filters, and factories, rather than scattered throughout your application. Here's how you can implement the DRY principle in AngularJS:

### 1. **Use Services to Centralize Business Logic**
Services in AngularJS allow you to encapsulate business logic and reusable functionality. This ensures that common logic, such as API calls, data processing, or state management, is not duplicated across multiple controllers or components.

#### Example:
Instead of repeating the same logic in multiple controllers, you can create a service to handle it.

**Bad Example:**
```javascript
// Repeating logic in multiple controllers
angular.module('app').controller('OrderController', function($scope, $http) {
  $http.get('/orders').then(function(response) {
    $scope.orders = response.data;
  });
});

angular.module('app').controller('ProductController', function($scope, $http) {
  $http.get('/products').then(function(response) {
    $scope.products = response.data;
  });
});
```

**Good Example (DRY):**
```javascript
angular.module('app').service('DataService', function($http) {
  this.getData = function(endpoint) {
    return $http.get(endpoint);
  };
});

angular.module('app').controller('OrderController', function($scope, DataService) {
  DataService.getData('/orders').then(function(response) {
    $scope.orders = response.data;
  });
});

angular.module('app').controller('ProductController', function($scope, DataService) {
  DataService.getData('/products').then(function(response) {
    $scope.products = response.data;
  });
});
```

By centralizing the API call logic in the `DataService`, both the `OrderController` and `ProductController` can reuse the same logic, reducing duplication.

### 2. **Use Factories for Reusable Code**
Factories are a powerful way to share common code across multiple controllers. If you have logic that is shared across different parts of your application, encapsulate it in a factory to avoid redundancy.

#### Example:
**Bad Example:**
```javascript
angular.module('app').controller('UserController', function($scope, $http) {
  $http.get('/user').then(function(response) {
    $scope.user = response.data;
  });
});

angular.module('app').controller('AdminController', function($scope, $http) {
  $http.get('/user').then(function(response) {
    $scope.user = response.data;
  });
});
```

**Good Example (DRY):**
```javascript
angular.module('app').factory('UserFactory', function($http) {
  return {
    getUser: function() {
      return $http.get('/user');
    }
  };
});

angular.module('app').controller('UserController', function($scope, UserFactory) {
  UserFactory.getUser().then(function(response) {
    $scope.user = response.data;
  });
});

angular.module('app').controller('AdminController', function($scope, UserFactory) {
  UserFactory.getUser().then(function(response) {
    $scope.user = response.data;
  });
});
```

### 3. **Reuse Directives for Common UI Elements**
AngularJS **directives** are a great way to encapsulate and reuse UI components. By creating reusable components for common UI elements, you ensure consistency and avoid repeating HTML and logic.

#### Example:
**Bad Example:**
```html
<!-- Repeating the same logic in multiple places -->
<div ng-controller="HeaderController">
  <h1>Welcome</h1>
  <div>
    <span>{{user.name}}</span>
  </div>
</div>

<div ng-controller="FooterController">
  <h1>Goodbye</h1>
  <div>
    <span>{{user.name}}</span>
  </div>
</div>
```

**Good Example (DRY):**
```javascript
angular.module('app').directive('userInfo', function() {
  return {
    restrict: 'E',
    template: '<div><span>{{user.name}}</span></div>',
    scope: {
      user: '='
    }
  };
});

<!-- Use the directive wherever needed -->
<user-info user="user"></user-info>
```

Now, the logic to display user information is reused in the `user-info` directive, which you can use in both the header and footer (or anywhere else).

### 4. **Use Filters for Reusable Data Formatting**
If you have repetitive logic for formatting data (e.g., dates, currencies, numbers), use AngularJS **filters** to encapsulate the formatting logic.

#### Example:
**Bad Example:**
```javascript
angular.module('app').controller('ProductController', function($scope) {
  $scope.productPrice = 1000;
});

angular.module('app').controller('OrderController', function($scope) {
  $scope.orderTotal = 1000;
});
```

In both controllers, you might want to display the price or total with a currency format. Instead of repeating the formatting logic, you can use a built-in or custom filter.

**Good Example (DRY):**
```javascript
angular.module('app').filter('currencyFormat', function() {
  return function(amount) {
    return '$' + amount.toFixed(2);
  };
});

<!-- In the template -->
<div>{{productPrice | currencyFormat}}</div>
<div>{{orderTotal | currencyFormat}}</div>
```

### 5. **Avoid Repeating Validation Logic**
Validation logic often needs to be repeated in forms. By creating a service or directive that encapsulates validation logic, you can avoid duplicating it across your application.

#### Example:
**Bad Example:**
```javascript
angular.module('app').controller('FormController', function($scope) {
  $scope.submitForm = function() {
    if ($scope.email && $scope.password) {
      // Submit the form
    } else {
      // Show validation error
    }
  };
});

angular.module('app').controller('AnotherFormController', function($scope) {
  $scope.submitForm = function() {
    if ($scope.email && $scope.password) {
      // Submit the form
    } else {
      // Show validation error
    }
  };
});
```

**Good Example (DRY):**
```javascript
angular.module('app').service('FormValidationService', function() {
  this.isValid = function(form) {
    return form.email && form.password;
  };
});

angular.module('app').controller('FormController', function($scope, FormValidationService) {
  $scope.submitForm = function() {
    if (FormValidationService.isValid($scope)) {
      // Submit the form
    } else {
      // Show validation error
    }
  };
});

angular.module('app').controller('AnotherFormController', function($scope, FormValidationService) {
  $scope.submitForm = function() {
    if (FormValidationService.isValid($scope)) {
      // Submit the form
    } else {
      // Show validation error
    }
  };
});
```

### 6. **Use Constants for Repetitive Values**
If you have certain values that are used in multiple places in your application (like API URLs or configuration settings), define them as **constants**. This way, they are easily reusable and can be updated in one place.

#### Example:
**Bad Example:**
```javascript
angular.module('app').controller('OrderController', function($scope, $http) {
  $http.get('https://api.example.com/orders').then(function(response) {
    $scope.orders = response.data;
  });
});

angular.module('app').controller('ProductController', function($scope, $http) {
  $http.get('https://api.example.com/products').then(function(response) {
    $scope.products = response.data;
  });
});
```

**Good Example (DRY):**
```javascript
angular.module('app').constant('API_URL', 'https://api.example.com');

angular.module('app').controller('OrderController', function($scope, $http, API_URL) {
  $http.get(API_URL + '/orders').then(function(response) {
    $scope.orders = response.data;
  });
});

angular.module('app').controller('ProductController', function($scope, $http, API_URL) {
  $http.get(API_URL + '/products').then(function(response) {
    $scope.products = response.data;
  });
});
```

### 7. **Modularize Repeated Code**
If certain code structures are repeated across different areas of the application, consider modularizing them into separate, reusable components. This makes your code cleaner and more maintainable.

#### Example:
- **Create separate modules for user management, orders, products, etc.** to encapsulate repeated logic in each feature.
- **Shared services** can be used across modules to handle cross-cutting concerns like authentication, logging, or settings.

### Conclusion:
To implement the **DRY** principle in AngularJS:
1. **Centralize business logic** in services or factories.
2. **Reuse components** like directives for common UI elements.
3. **Create reusable filters** for common data formatting tasks.
4. **Modularize validation** and other reusable logic into services.
5. **Use constants** to store repetitive values like API endpoints.
6. **Avoid repeating code** across controllers by leveraging shared services and components.

By following the DRY principle in AngularJS, you reduce redundancy, improve code maintainability, and make the application more scalable.