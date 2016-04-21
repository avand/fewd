function addToCart(productID) {
  var current = cart();

  if (current == null) {
    current = [];
  }

  current.push(productID);

  var string = JSON.stringify(current);
  localStorage.setItem("cart", string);
};

function cart() {
  var string     = localStorage.getItem("cart"),
      productIDs = JSON.parse(string);

  return productIDs;
};

function handleButtonClick(event) {
  event.preventDefault();

  addToCart(this.id);

  var currentCart = cart();

  alert("Your cart has " + currentCart.length + " item(s)");
  console.log(currentCart);
};

function addEventListenersToButtons(event) {
  var buttonsNodeList = document.querySelectorAll(".products .btn"),
      buttonsArray    = Array.prototype.slice.call(buttonsNodeList);

  buttonsArray.forEach(function(button) {
    button.addEventListener("click", handleButtonClick);
  });
};

window.addEventListener("load", addEventListenersToButtons)
