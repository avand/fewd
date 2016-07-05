$(document).ready(function() {
  $("nav").load("../../partials/lecture_navigation.html");

  var bootstrap = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css";
  var bootstrapTheme = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css";
  $("head").append("<link rel='stylesheet' href='" + bootstrap + "'>");
  $("head").append("<link rel='stylesheet' href='" + bootstrapTheme + "'>");

  var timer;
  var skipEnlargment = false;

  $(".enlarge-on-hover").mouseenter(function() {
    if (skipEnlargment) return;

    var smallImage = $(this);
    var largeImage = smallImage.clone();
    var rect = this.getBoundingClientRect();

    timer = setTimeout(function() {
      console.log("url(" + smallImage.attr("src") + ")");
      $("<div>").addClass("image-enlargement-target").css({
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: smallImage.width(),
        height: smallImage.height()
      }).mouseleave(function() {
        $(this).remove();
        largeImage.remove();
        setTimeout(function() { skipEnlargment = false; }, 100);
      }).appendTo("body")

      largeImage.css({
        position: "fixed",
        top: "5px",
        left: "10%",
        width: "80%"
      }).removeClass("enlarge-on-hover").appendTo("body");

      skipEnlargment = true;
    }, 200);
  }).mouseleave(function() {
    clearTimeout(timer);
  })

})
