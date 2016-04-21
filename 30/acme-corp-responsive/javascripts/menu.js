$(document).ready(function() {
  function toggleMenu(e) {
    $("header nav").toggleClass("expanded");
  }

  $('#logo').click(toggleMenu);
});

document.addEventListener("domcontentloaded", function() {

})
