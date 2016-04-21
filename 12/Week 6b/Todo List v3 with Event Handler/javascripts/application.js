function createTodo(text) {
  var listItem = document.createElement("li");
      label    = document.createElement("label");
      checkbox = document.createElement("input");
      span     = document.createElement("span");
      list     = document.querySelector("#list");

  span.textContent = text;

  checkbox.setAttribute("type", "checkbox");

  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);
  list.appendChild(listItem);
}

function addTodo(event) {
  var input = document.querySelector("#item-name");
  var name = prompt("What's your name?");
  if (name != undefined) {
    createTodo(input.value);
  }
  event.preventDefault();
}

createTodo("Laundry");
createTodo("Homework");
createTodo("Celebrate good times!");

var newItemForm = document.querySelector("form");

newItemForm.addEventListener("submit", addTodo);







