$(document).ready(function() {
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $("#image-shown").click(function() {
    $("#image-shown").toggle();
    $("#image-hidden").toggle();
    $("img").toggle();
  });

  $("#image-hidden").click(function() {
    $("#image-shown").toggle();
    $("#image-hidden").toggle();
    $("img").toggle();
  });
});
