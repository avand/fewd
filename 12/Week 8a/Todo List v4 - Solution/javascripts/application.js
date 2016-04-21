function createTodo(text, date) {
  var listItem = document.createElement("li"),
      label    = document.createElement("label"),
      checkbox = document.createElement("input"),
      span     = document.createElement("span");

  span.textContent = text;

  checkbox.setAttribute("type", "checkbox");

  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);

  if (date.length > 0) {
    var time = document.createElement("time");
    time.textContent = "(" + date + ")";
    listItem.appendChild(time);
  }

  return listItem;
}

function addTodo(event) {
  event.preventDefault();

  var itemForm = document.querySelector("#add-item-form"),
      itemName = document.querySelector("#item-name"),
      itemDate = document.querySelector("#item-due-date"),
      list     = document.querySelector("#list"),
      todos    = document.querySelectorAll("li"),
      todo     = createTodo(itemName.value, itemDate.value);

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].textContent == todo.textContent) {
      alert("That item is already on the list!");
      return;
    }
  }

  list.appendChild(todo);
  itemForm.reset();
}

var newItemForm = document.querySelector("form");
newItemForm.addEventListener("submit", addTodo);
