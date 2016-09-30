var form = document.querySelector("form");
var textarea = document.querySelector("textarea");
var likeLink = document.querySelector(".tweet-actions a")

form.addEventListener("submit", formSubmitted);

function createTweet(textContent, image) {
  var li = document.createElement("li");
  var avatar = document.createElement("div");
  var img = document.createElement("img");
  var text = document.createElement("div");
  var textDiv = document.createElement("div");
  var actions = document.createElement("div");
  var link = document.createElement("a");
  var span = document.createElement("span");

  li.classList.add("tweet");
  avatar.classList.add("tweet-avatar");
  text.classList.add("tweet-text");
  actions.classList.add("tweet-actions");
  span.classList.add("like-count");

  img.setAttribute("width", "64");
  img.setAttribute("height", "64");
  img.setAttribute("src", image);
  link.setAttribute("href", "#");

  textDiv.textContent = textContent;
  link.textContent = "Like";
  span.textContent = "(0)";

  li.appendChild(avatar);
  avatar.appendChild(img);
  li.appendChild(text);
  text.appendChild(textDiv);
  text.appendChild(actions);
  actions.appendChild(link);
  actions.appendChild(span);


  // document.querySelector(".tweets").appendChild(li);

  var tweets = document.querySelector(".tweets")
  tweets.insertBefore(li, tweets.firstChild);
}

function formSubmitted(formSubmitEvent) {
  formSubmitEvent.preventDefault();

  createTweet(textarea.value, "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg")
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

//
