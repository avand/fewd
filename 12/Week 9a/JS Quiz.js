var m = 1;
var n = 2;
var s = m + n;


window.alert(s);                                                                      // alert(s)











////////////////////////////////////////////////////////////////////////////////






var dob  = prompt("What year were you born?"),
    year = 2015,
    age  = 2015 - parseInt(dob);                                                          // parseInt

alert("You are " + age + " years old.");





////////////////////////////////////////////////////////////////////////////////





var m = parseInt(prompt("First number?"),
    n = parseInt(prompt("Second number?");

function add() {                                                                // args
  return m + n;
}

add(m, n);
add(3, 5);





////////////////////////////////////////////////////////////////////////////////




var car1 = { make: "VW",      model: "Golf",  year: 2008, topSpeed: "120mph" },
    car2 = { make: "Porsche", model: "911",   year: 2011, topSpeed: "200mph" },
    car3 = { make: "Ford",    model: "Focus", year: 2012, topSpeed: "100mph" };
    cars = [car1, car2, car3],
    fastestCar = cars[0];

cars.forEach(function(car) {
  if (parseInt(car.topSpeed) > parseInt(fastestCar.topSpeed)) {                                     // parseInt
    fastestCar = car;
  }
});

alert("The fastest car is the " + fastestCar.make);

////////////////////////////////////////////////////////////////////////////////

function createListItem(text) {
  var li = document.createElement("li");
  li.textContent = text;                                                        // return
};

var list     = document.querySelector("ul"),
    listItem = createListItem("cookies");

list.appendChild(listItem);

////////////////////////////////////////////////////////////////////////////////

function createListItem(text) {
  var li = document.createElement("li");
  li.textContent = text;
  return li;
};

function addItem(event) {
  event.preventDefault();

  var input = document.querySelector("input#new-item-name"),
      list  = document.querySelector("ul"),
      li    = createListItem(input);                                            // input.value

  list.appendChild(li);
}

document.querySelector("form#new-item").addEventListener("submit", addItem);

////////////////////////////////////////////////////////////////////////////////

var anchorsNodeList = document.querySelectorAll("a"),
    anchorsArray    = Array.prototype.slice.call(anchorsNodeList),
    warning         = "You're about to leave this site. Are you sure?";

anchorsArray.forEach(function(anchor) {
  anchor.addEventListener("click", function() {                                 // clickEvent
    if (!confirm(warning)) {
      clickEvent.preventDefault();
    }
  });
});
