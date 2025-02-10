In **AngularJS**, **filters** are used to format or transform data before it's displayed to the user. Filters can be applied to expressions in the view (HTML) to modify how data is presented without altering the underlying data in the model. Filters are used to format things like dates, numbers, currencies, and text, or to even create custom transformations.

### Key Characteristics of AngularJS Filters:

1. **Transform Data**: Filters allow you to format data such as dates, currencies, and numbers, or to change text case or search/modify the data.
2. **Reusability**: Filters can be applied globally, or to specific parts of the application wherever needed.
3. **No Data Mutation**: Filters **do not change the underlying data**; they just affect how it is presented in the view.
4. **Pipe Operator**: In AngularJS templates, filters are often used with the pipe operator `|` to transform the data in expressions.

---

### Common Built-in Filters in AngularJS:

1. **`currency`**: Formats a number as a currency string.
   - Example: Formats a number to display as a currency (with the currency symbol).
   ```html
   {{ 12345.678 | currency }}
   ```
   Output: 
   ```
   $12,345.68
   ```

2. **`date`**: Formats a date (or timestamp) into a readable format.
   - Example: Formats a date to a readable string.
   ```html
   {{ '2025-02-10' | date:'medium' }}
   ```
   Output: 
   ```
   Feb 10, 2025, 12:00:00 PM
   ```

3. **`filter`**: Filters an array of objects or items based on a condition.
   - Example: Filters an array to show only items that match a certain condition.
   ```html
   <div ng-repeat="item in items | filter:'apple'">
     {{ item }}
   </div>
   ```
   This will display all items that contain the word "apple".

4. **`json`**: Converts a JavaScript object into a JSON-formatted string.
   - Example: Convert an object to a JSON string.
   ```html
   {{ {name: 'John', age: 30} | json }}
   ```
   Output: 
   ```
   {"name":"John","age":30}
   ```

5. **`limitTo`**: Limits the number of items or characters shown.
   - Example: Limits the list to the first 3 items.
   ```html
   <ul>
     <li ng-repeat="item in items | limitTo: 3">{{ item }}</li>
   </ul>
   ```

6. **`lowercase`** and **`uppercase`**: Converts text to lowercase or uppercase.
   - Example:
   ```html
   {{ 'Hello World' | lowercase }}
   ```
   Output: 
   ```
   hello world
   ```
   ```html
   {{ 'Hello World' | uppercase }}
   ```
   Output: 
   ```
   HELLO WORLD
   ```

7. **`number`**: Formats a number with a specific number of decimals.
   - Example:
   ```html
   {{ 12345.678 | number:2 }}
   ```
   Output: 
   ```
   12,345.68
   ```

8. **`orderBy`**: Sorts an array of objects or values based on a specified property.
   - Example:
   ```html
   <div ng-repeat="item in items | orderBy:'name'">
     {{ item.name }}
   </div>
   ```
   This will display items sorted by the `name` property.

---

### Custom Filters in AngularJS:

In addition to built-in filters, you can create **custom filters** for specific data transformations based on your requirements.

#### Syntax for Creating a Custom Filter:

```javascript
angular.module('myApp', [])
  .filter('myCustomFilter', function() {
    return function(input) {
      // Modify the input and return it
      return input + " modified by custom filter!";
    };
  });
```

You can then use this custom filter in your view:

```html
<div>{{ 'Hello' | myCustomFilter }}</div>
```

Output:
```
Hello modified by custom filter!
```

### Example of Custom Filter to Format Numbers as "Thousands" Format:

Suppose we want to create a custom filter that adds a `,` separator every three digits (as commonly done with large numbers).

```javascript
angular.module('myApp', [])
  .filter('thousands', function() {
    return function(input) {
      // Convert input to string and add comma separators
      if (input) {
        return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      return input;
    };
  });
```

HTML:
```html
<div>{{ 1234567 | thousands }}</div>
```

Output:
```
1,234,567
```

---

### Filter Usage in Controllers or Code:

You can also use filters in your **AngularJS controllers** by using the `$filter` service. This is helpful if you need to apply a filter within JavaScript logic (rather than just in the view).

Example:
```javascript
angular.module('myApp', [])
  .controller('MainCtrl', function($scope, $filter) {
    var formattedCurrency = $filter('currency')(12345.678, '₹');
    $scope.formattedAmount = formattedCurrency; // ₹12,345.68
  });
```

---

### Summary of Filters in AngularJS:

- **Filters** are used to format, modify, or transform data before displaying it to the user.
- Built-in filters like `currency`, `date`, `uppercase`, and `filter` help you manipulate data easily without modifying the underlying model.
- Custom filters can be created to perform custom transformations or data formatting as per your application’s needs.
- Filters can be used in **expressions** in templates and **within controllers** using the `$filter` service.

Filters in AngularJS allow for clean, concise, and reusable transformations in your application, making them a powerful tool for handling data formatting and presentation logic.