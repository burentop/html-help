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

  $("#fade-shown").click(function() {
    $("#fade-shown").fadeOut();
    $("#fade-hidden").fadeIn();
  });

  $("#fade-hidden").click(function() {
    $("#fade-shown").fadeIn();
    $("#fade-hidden").fadeOut();
  });
});
