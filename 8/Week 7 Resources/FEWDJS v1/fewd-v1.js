// FEWDJS v1
//
// Includes global helper functions to:
//
//  * Find an element by ID
//  * Set and get an element's value
//  * Set and get an element's innerText/HTML
//  * Set and get an element's CSS class

// Return an element with specified ID
function e(id) {
  return document.getElementById(id);
};

// Return value for element with ID "foo":
//
//   v("foo");
//
// Set value for element with ID "foo":
//
//   v("foo", "new value");
function v(id, newValue) {
  if (typeof(newValue) === "undefined") {
    return e(id).value;
  } else {
    e(id).value = newValue;
  }
};

// Return the HTML for element with ID "foo":
//
//   h("foo");
//
// Set HTML for element with ID "foo":
//
//   h("foo", "<p>new HTML</p>");
function h(id, newHTML) {
  if (typeof(newHTML) === "undefined") {
    return e(id).innerHTML;
  } else {
    e(id).innerHTML = newHTML;
  }
}

// Return the text for element with ID "foo":
//
//   t("foo");
//
// Set text for element with ID "foo":
//
//   t("foo", "<p>new HTML</p>");
function t(id, newText) {
  if (typeof(newText) === "undefined") {
    return e(id).innerText;
  } else {
    e(id).innerText = newText;
  }
}

// Return the CSS class for element with ID "foo":
//
//   c("foo");
//
// Set CSS class for element with ID "foo":
//
//   c("foo", "new-class");
function c(id, newCSSClass) {
  if (typeof(newCSSClass) === "undefined") {
    return e(id).className;
  } else {
    e(id).className = newCSSClass;
  }
}
