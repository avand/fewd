function itemsFromStorage() {
  var items = localStorage.getItem("items");

  if (items) {
    return JSON.parse(items);
  } else {
    return [];
  }
};

function updateStorage(items) {
  var json = JSON.stringify(items);
  localStorage.setItem("items", json);
};

function saveTodo(text, date, completed) {
  var items   = itemsFromStorage(),
      newItem = { name: text, completeBy: date, completed: completed };

  items.push(newItem);

  updateStorage(items)
};

function itemClicked(event) {
  var items    = itemsFromStorage(),
      checkbox = this;

  items.forEach(function(item) {
    if (checkbox.labels[0].textContent == item.name) {
      item.completed = checkbox.checked;
    }
  })

  updateStorage(items);
};

function createTodo(text, date, completed) {
  var listItem = document.createElement("li"),
      label    = document.createElement("label"),
      checkbox = document.createElement("input"),
      span     = document.createElement("span");

  span.textContent = text;

  checkbox.setAttribute("type", "checkbox");

  if (completed) {
    checkbox.setAttribute("checked", true);
  }

  checkbox.addEventListener("click", itemClicked);

  label.appendChild(checkbox);
  label.appendChild(span);
  listItem.appendChild(label);

  if (date != undefined && date.length > 0) {
    var time = document.createElement("time");
    time.textContent = "(" + date + ")";
    listItem.appendChild(time);
  }

  return listItem;
};

function addTodo(event) {
  event.preventDefault();

  var itemForm = document.querySelector("#add-item-form"),
      itemName = document.querySelector("#item-name"),
      itemDate = document.querySelector("#item-due-date"),
      list     = document.querySelector("#list"),
      todos    = document.querySelectorAll("li"),
      todo     = createTodo(itemName.value, itemDate.value, false);

  for (var i = 0; i < todos.length; i++) {
    if (todos[i].textContent == todo.textContent) {
      alert("That item is already on the list!");
      return;
    }
  }

  list.appendChild(todo);
  saveTodo(itemName.value, itemDate.value, false);
  itemForm.reset();
};

function loadItemsFromStorage() {
  var items = itemsFromStorage();

  if (items) {
    items.forEach(function(item) {
      var list = document.querySelector("#list"),
          todo = createTodo(item.name, item.completeBy, item.completed);

      list.appendChild(todo);
    });
  }
};

var newItemForm = document.querySelector("form");
newItemForm.addEventListener("submit", addTodo);

window.addEventListener("load", function() {
  loadItemsFromStorage();
});
