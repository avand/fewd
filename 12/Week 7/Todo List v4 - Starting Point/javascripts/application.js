function createTodo(text) {
  var listItem = document.createElement("li"),
      label    = document.createElement("label"),
      checkbox = document.createElement("input"),
      span     = document.createElement("span");

  span.textContent = text;

  checkbox.setAttribute("type", "checkbox");

  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);

  return listItem;
}

function addTodo(event) {
  var input = document.querySelector("#item-name"),
      list  = document.querySelector("#list"),
      todo  = createTodo(input.value);

  list.appendChild(todo);

  event.preventDefault();
}

var newItemForm = document.querySelector("form");

newItemForm.addEventListener("submit", addTodo);


