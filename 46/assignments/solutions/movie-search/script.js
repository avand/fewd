var form = document.querySelector("#movie-search-form");
form.addEventListener("submit", formSubmitted);

function formSubmitted(event) {
  event.preventDefault();
  var query = document.querySelector("#query").value;
  var url = "http://omdbapi.com/?s=" + query;
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  results.Search.forEach(displayMovie);
}

function displayMovie(movie) {
  var item = document.createElement("li");
  var link = document.createElement("a");
  var title = document.createElement("div");
  var release = document.createElement("div");

  link.textContent = movie["Title"];
  release.textContent = movie["Year"];

  var url = "http://www.imdb.com/title/" + movie["imdbID"];
  link.setAttribute("href", url);                         
  link.setAttribute("target", "_blank");

  item.classList.add("movie");
  title.classList.add("movie-title");
  release.classList.add("movie-release-date");

  title.appendChild(link);
  item.appendChild(title);
  item.appendChild(release);
  document.querySelector("#movies").appendChild(item);
}
