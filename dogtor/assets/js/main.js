// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  changeColorNavbar();

  $(".talla").click(function () {
    $(".talla").removeClass("active");
    $(this).addClass("active");
    $(".triangulo").fadeOut(300);
    $(this).siblings(".triangulo").fadeIn(500);
    $(".content-price").html($(this).attr("data-price"));
  });
});
$(window).scroll(function () {
  changeColorNavbar();
});
$(window).resize(function () {
  if ($(window).width() < 1200) {
    $(".nav-transp .navbar").css("background-color", "#2d52a5");
  } else {
    if ($(window).scrollTop() < 100) {
      $(".nav-transp .navbar").css("background-color", "transparent");
    }
  }
});
function changeColorNavbar() {
  if ($(window).scrollTop() > 100) {
    $("#pre-nav").css({
      "background-color": "#F7CF55",
      height: "0px",
    });
    if ($(window).width() > 1200) {
      $(".nav-transp .navbar").css("background-color", "#2d52a5");
    }
  } else {
    $("#pre-nav").css({
      "background-color": "#F7CF55",
      height: "35px",
    });
    if ($(window).width() > 1200) {
      $(".nav-transp .navbar").css("background-color", "transparent");
    }
  }
}
let srcVideoIndex =
  "https://www.youtube.com/embed/PT8xS0LHjBQ?rel=0;autoplay=1";
$("#videoIndex").on("hidden.bs.modal", function () {
  $("#videoIndex iframe").attr("src", "");
});
$("#videoIndex").on("show.bs.modal", function () {
  $("#videoIndex iframe").attr("src", srcVideoIndex);
});
