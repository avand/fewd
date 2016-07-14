var likeLink = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");

var commentForm = document.querySelector("#new-comment");
var commentBody = document.querySelector("#new-comment-body");
var comments = document.querySelector("#comments");

likeLink.addEventListener("click", like);
commentForm.addEventListener("submit", createComment);

function like(event) {
  event.preventDefault();

  var count = parseInt(likeCount.textContent)
  debugger
  likeCount.textContent = count++;
}

function createComment(event) {
  event.preventDefault();

  var comment = document.createElement("div");
  comment.classList.add("comment");
  comment.textContent = commentBody.value;
  comments.appendChild(comment);
  commentForm.reset();
};
