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

* Set/get attributes of an element
* Add/remove classes from an alement
