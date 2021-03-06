### Read/write the value of any input

```
// Get the input from the DOM
var input = document.querySelector("...")

// Read the input's value
var val = input.value;

// Write a new value
input.value = "new value";
```

### Read/write the textContent of an element

```
// Get the el from the DOM
var el = document.querySelector("div");

// Read the el's textContent
var tc = el.textContent;

// Write a new textContent
el.textContent = "new tc";
```

### Adding a new element to the page

```
// Create the new element
var newChild = document.createElement("li");

// Get the parent
var parent = document.querySelector("ul");

// Append the child to the parent
parent.appendChild(newChild);

// Do whatever else you want to the child...
```

### Set/get attributes of an element

```
// Get the element (or create it!)
var el = document.querySelector("img");

// Get the current value of the src attribute
var currentSrc = el.getAttribute("src");

// Set the value of the src attribute
el.setAttribute("src", "path/to/image.jpg")
```

### Add/remove classes from an alement

```
// Get the element (or create it!)
var el = document.querySelector("a");

// Add a class to the element
el.classList.add("button");
el.classList.add("button-danger");

// Remove a class from the element
el.classList.remove("button-danger");
```
