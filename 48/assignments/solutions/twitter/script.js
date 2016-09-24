var form = document.querySelector("form");
var textarea = document.querySelector("textarea");
var likeLink = document.querySelector(".tweet-actions a")

form.addEventListener("submit", formSubmitted);

function formSubmitted(formSubmitEvent) {
  console.log(formSubmitEvent);

  formSubmitEvent.preventDefault();

  var tweet = document.createElement("div");
  tweet.textContent = textarea.value;

  document.querySelector(".tweets").appendChild(tweet);
}

textarea.addEventListener("keydown", decrementCharCount);

function decrementCharCount(keyboardEvent) {
  console.log(keyboardEvent);

  var charCountSpan = document.querySelector(".char-count");
  charCountSpan.textContent = parseInt(charCountSpan.textContent) - 1;
}

likeLink.addEventListener("click", like);

function like(mouseEvent) {
  console.log(mouseEvent);
}

// someParentObject.insertBefore(someChildObject,someParentObject.firstChild);
