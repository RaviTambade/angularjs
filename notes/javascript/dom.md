## Javascript DOM 
DOM manipulation in JavaScript involves interacting with the Document Object Model (DOM), which represents the structure of an HTML document as a tree of nodes. JavaScript can manipulate the DOM dynamically, allowing you to create, modify, or delete HTML elements, change their attributes or styles, and respond to user interactions. Here's an overview of DOM manipulation techniques in JavaScript:

### Accessing DOM Elements:

#### 1. `document.getElementById()`:
Returns a reference to the element with the specified ID.

```javascript
let element = document.getElementById("myElement");
```

#### 2. `document.querySelector()`:
Returns the first element that matches a specified CSS selector.

```javascript
let element = document.querySelector(".myClass");
```

#### 3. `document.querySelectorAll()`:
Returns a NodeList containing all elements that match a specified CSS selector.

```javascript
let elements = document.querySelectorAll("div");
```

### Manipulating DOM Elements:

#### 1. Changing Content:
```javascript
// Changing text content
element.textContent = "New Text";

// Changing HTML content
element.innerHTML = "<b>New HTML</b>";
```

#### 2. Changing Attributes:
```javascript
// Setting attributes
element.setAttribute("src", "image.jpg");

// Getting attributes
let src = element.getAttribute("src");
```

#### 3. Changing Styles:
```javascript
// Setting styles
element.style.color = "red";

// Getting styles
let color = element.style.color;
```

#### 4. Adding and Removing Classes:
```javascript
// Adding a class
element.classList.add("active");

// Removing a class
element.classList.remove("inactive");
```

### Creating New Elements:

```javascript
// Create a new element
let newElement = document.createElement("div");

// Set attributes and content
newElement.textContent = "New Element";
newElement.setAttribute("class", "newClass");

// Append the new element to the DOM
parentElement.appendChild(newElement);
```

### Event Handling:

#### 1. Adding Event Listeners:
```javascript
element.addEventListener("click", function() {
    console.log("Element clicked");
});
```

#### 2. Event Delegation:
```javascript
parentElement.addEventListener("click", function(event) {
    if (event.target.classList.contains("child")) {
        console.log("Child element clicked");
    }
});
```

### Removing Elements:

```javascript
// Remove an element
parentElement.removeChild(childElement);
```

### Traversing the DOM:

```javascript
// Accessing parent element
let parentElement = childElement.parentElement;

// Accessing next sibling element
let nextSibling = childElement.nextElementSibling;

// Accessing previous sibling element
let previousSibling = childElement.previousElementSibling;
```

### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation Example</title>
    <style>
        .highlight {
            background-color: yellow;
        }
    </style>
</head>
<body>
    <div id="container">
        <button id="btn">Click me</button>
        <ul id="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>

    <script>
        // Accessing DOM elements
        let container = document.getElementById("container");
        let btn = document.getElementById("btn");
        let listItems = document.querySelectorAll("#list li");

        // Adding event listener
        btn.addEventListener("click", function() {
            container.style.backgroundColor = "lightblue";
        });

        // Iterating over list items
        listItems.forEach(function(item) {
            item.addEventListener("mouseover", function() {
                item.classList.add("highlight");
            });

            item.addEventListener("mouseout", function() {
                item.classList.remove("highlight");
            });
        });
    </script>
</body>
</html>
```

This example demonstrates basic DOM manipulation techniques such as accessing elements, changing content and styles, adding event listeners, and iterating over elements. DOM manipulation is a powerful aspect of JavaScript that allows you to create dynamic and interactive web pages.
