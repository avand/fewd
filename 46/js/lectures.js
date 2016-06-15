$(document).ready(function() {
  $("nav").load("../../partials/lecture_navigation.html");

  var timer;
  var skipEnlargment = false;

  $(".enlarge-on-hover").mouseenter(function() {
    if (skipEnlargment) return;

    var img = $(this);
    var rect = this.getBoundingClientRect();

    timer = setTimeout(function() {
      console.log("url(" + img.attr("src") + ")");
      $("<div>").addClass("image-enlargement-target").css({
        position: "fixed",
        top: rect.top,
        left: rect.left,
        width: img.width(),
        height: img.height()
      }).mouseleave(function() {
        $(this).remove();
        console.log("remove")
        img.removeAttr("style");
        setTimeout(function() { skipEnlargment = false; }, 100);
      }).appendTo("body")

      img.css({
        position: "fixed",
        top: "20px",
        left: "5%",
        right: "5%",
        width: "90%"
      });

      skipEnlargment = true;
    }, 200);
  }).mouseleave(function() {
    clearTimeout(timer);
  })

})
