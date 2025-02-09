In AngularJS (version 1.x), many inbuilt services are prefixed with `$`, as it's a convention to distinguish AngularJS services from regular JavaScript objects. These services provide various utilities for the development of AngularJS applications. Below is a list of some common inbuilt AngularJS services starting with `$`:

### 1. **$http**
   - **Purpose**: Used for making AJAX requests (HTTP requests) to a server.
   - **Usage**: Allows sending HTTP requests (GET, POST, PUT, DELETE) and handling responses.
   - **Example**:
     ```javascript
     $http.get('/api/data')
       .then(function(response) {
         console.log(response.data);
       });
     ```

### 2. **$scope**
   - **Purpose**: Provides the data and functions that are available to the view and controller. It's used to bind data between the controller and the view in AngularJS.
   - **Usage**: It serves as the communication bridge between the controller and the view.
   - **Example**:
     ```javascript
     $scope.message = "Hello, AngularJS!";
     ```

### 3. **$rootScope**
   - **Purpose**: A global scope object accessible across all controllers in the application.
   - **Usage**: Useful for sharing global variables or states across controllers.
   - **Example**:
     ```javascript
     $rootScope.loggedInUser = "John Doe";
     ```

### 4. **$timeout**
   - **Purpose**: Allows you to delay the execution of a function by a specified time period (similar to JavaScript's `setTimeout`).
   - **Usage**: Often used to delay or defer execution of certain code.
   - **Example**:
     ```javascript
     $timeout(function() {
       console.log('This message is delayed.');
     }, 2000); // Wait for 2 seconds
     ```

### 5. **$interval**
   - **Purpose**: Allows you to execute a function repeatedly at a given interval (similar to JavaScript's `setInterval`).
   - **Usage**: Used to perform actions at regular intervals, such as refreshing data or updating a UI element periodically.
   - **Example**:
     ```javascript
     $interval(function() {
       console.log('This message will show every 2 seconds.');
     }, 2000);
     ```

### 6. **$location**
   - **Purpose**: Provides methods for interacting with the browser’s URL.
   - **Usage**: Used to read and change the browser’s URL, and manage navigation.
   - **Example**:
     ```javascript
     $location.path('/newpath');
     ```

### 7. **$route**
   - **Purpose**: AngularJS’s built-in routing service to map URLs to controllers and views.
   - **Usage**: Used in conjunction with `ngRoute` for setting up route-based navigation.
   - **Example**:
     ```javascript
     $routeProvider.when('/home', {
       templateUrl: 'home.html',
       controller: 'HomeController'
     });
     ```

### 8. **$routeParams**
   - **Purpose**: Provides access to route parameters when using AngularJS routing.
   - **Usage**: Useful for extracting parameters passed through the URL.
   - **Example**:
     ```javascript
     var userId = $routeParams.userId;
     ```

### 9. **$window**
   - **Purpose**: A wrapper around the browser’s `window` object. It provides access to the browser window and the ability to interact with it.
   - **Usage**: Useful for manipulating or getting data from the browser window (e.g., `window.localStorage`, `window.location`, etc.).
   - **Example**:
     ```javascript
     $window.alert('This is a browser alert!');
     ```

### 10. **$document**
   - **Purpose**: A wrapper around the `document` object in the browser. Provides a way to interact with the DOM.
   - **Usage**: Used for DOM manipulations or querying the DOM.
   - **Example**:
     ```javascript
     var element = $document[0].getElementById('elementId');
     ```

### 11. **$q**
   - **Purpose**: A service that helps in dealing with asynchronous operations in a more manageable way using promises (similar to JavaScript’s `Promise`).
   - **Usage**: Frequently used with `$http` and other services to handle asynchronous actions.
   - **Example**:
     ```javascript
     $q(function(resolve, reject) {
       if (success) {
         resolve('Data received');
       } else {
         reject('Error');
       }
     });
     ```

### 12. **$log**
   - **Purpose**: Provides logging utilities for debugging (similar to `console.log`).
   - **Usage**: You can use `$log` to log messages with different log levels.
   - **Example**:
     ```javascript
     $log.info('This is an informational message');
     ```

### 13. **$compile**
   - **Purpose**: Used to compile HTML templates and link them to the scope.
   - **Usage**: Often used for dynamically creating or manipulating DOM elements in AngularJS.
   - **Example**:
     ```javascript
     var element = $compile('<div>{{ message }}</div>')($scope);
     ```

### 14. **$filter**
   - **Purpose**: Provides AngularJS's built-in filters for formatting data (e.g., `currency`, `date`, `uppercase`, etc.).
   - **Usage**: Used in templates or controllers to apply filters to data.
   - **Example**:
     ```javascript
     var formattedDate = $filter('date')(new Date(), 'yyyy-MM-dd');
     ```

### 15. **$anchorScroll**
   - **Purpose**: Provides a way to scroll to a particular element within the page, especially when handling anchor links.
   - **Usage**: Often used in single-page applications (SPAs) for scrolling to specific sections.
   - **Example**:
     ```javascript
     $anchorScroll('someElementId');
     ```

### 16. **$httpParamSerializer**
   - **Purpose**: Serializes the parameters to be used in an HTTP request.
   - **Usage**: Used when sending data as URL parameters.
   - **Example**:
     ```javascript
     var serialized = $httpParamSerializer({ name: 'John', age: 30 });
     ```

### 17. **$cacheFactory**
   - **Purpose**: Creates and manages an in-memory cache in your application.
   - **Usage**: Useful for caching data and improving the performance of an app.
   - **Example**:
     ```javascript
     var myCache = $cacheFactory('myCache');
     myCache.put('key', 'value');
     ```

### 18. **$interval**
   - **Purpose**: Allows you to run a function repeatedly at specific intervals.
   - **Usage**: Similar to `setInterval` in JavaScript.
   - **Example**:
     ```javascript
     var intervalPromise = $interval(function() {
       console.log('Repeating this every 2 seconds');
     }, 2000);
     ```

### 19. **$filter**
   - **Purpose**: A service that helps you format or transform data.
   - **Usage**: Allows you to apply filters such as currency, date formatting, and custom filters in AngularJS templates or controllers.
   - **Example**:
     ```javascript
     var formattedNumber = $filter('currency')(12345.6789); // Returns $12,345.68
     ```

---

### Conclusion
AngularJS provides many built-in services to manage common tasks like HTTP requests, routing, logging, timeouts, and more. Each service is designed to make developing AngularJS applications easier by providing useful abstractions and utilities. Understanding these services is essential for building well-structured AngularJS applications.