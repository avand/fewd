var form = document.querySelector("#new-item-form");
var input = document.querySelector("#new-item-input");
var list = document.querySelector("#todo-list");

function createItem(todo) {
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  var label = document.createElement("label");
  var span = document.createElement("span");

  checkbox.setAttribute("type", "checkbox");
  span.textContent = todo;

  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);
  list.appendChild(listItem);
}

function formSubmitted(event) {
  event.preventDefault();

  createItem(input.value);

  form.reset();
}

form.addEventListener("submit", formSubmitted);
