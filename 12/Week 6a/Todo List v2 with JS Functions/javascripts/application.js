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

createTodo("Laundry");
createTodo("Homework");
createTodo("Celebrate good times!");
