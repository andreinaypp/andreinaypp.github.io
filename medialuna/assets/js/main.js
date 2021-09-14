// ------------------------------------------------------------
// NAVBAR
// ------------------------------------------------------------
$(window).ready(function () {
  // changeColorNavbar();
  changeDesktopNavbar();

  tabcontentInitial = document.querySelector(".tabcontent.tab-ppal");
  tabcontentInitial.style.display = "block";
});
$(window).scroll(function () {
  // changeColorNavbar();
  changeDesktopNavbar();
});
$(window).resize(function () {
  changeDesktopNavbar();
});
function changeColorNavbar() {
  if ($(window).scrollTop() > 100) {
    $(".navbar").css({
      background:
        "linear-gradient(87.71deg, rgba(189, 231, 226, 0.75) 0%, #9CD3CD 46%, rgba(156, 211, 205, 0.76) 100%)",
    });
  } else {
    $(".navbar").css({
      "background-color":
        "linear-gradient(87.71deg, rgba(189, 231, 226, 0.75) 0%, #9CD3CD 46%, rgba(156, 211, 205, 0.76) 100%)",
    });
  }
}
function changeDesktopNavbar() {
  if ($(window).width() >= 1200) {
    if ($(window).scrollTop() > 100) {
      $("#pre-nav").css({
        height: "0px",
      });
      setTimeout(() => {
        $("#pre-nav > div").css({
          opacity: "0",
        });
      }, 300);
      $(".navbar").css({
        height: "55px",
      });
      $(".logo-navbar").css({
        transform: "translateY(0px)",
      });
    } else {
      $("#pre-nav").css({
        height: "20px",
      });
      setTimeout(() => {
        $("#pre-nav > div").css({
          opacity: "1",
        });
      }, 300);
      $(".navbar").css({
        height: "35px",
      });
      $(".logo-navbar").css({
        transform: "translateY(-10px)",
      });
    }
  } else {
    $(".navbar").css({
      height: "auto",
    });
    $(".logo-navbar").css({
      transform: "translateY(0px)",
    });
  }
}

$(".box").click(function () {
  $("html, body").animate(
    { scrollTop: $("section.section2").offset().top },
    "slow"
  );
  return false;
});

function openCity(evt, cardMenus) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cardMenus).style.display = "block";
  evt.currentTarget.className += " active";
}

$("#mas, #menos").click("on", function (e) {
  e.preventDefault();
  let cantidad = $(this).siblings(".cantidad");
  let min = parseInt(cantidad.attr("min"));
  let max = parseInt(cantidad.attr("max"));
  let current_value = parseInt(cantidad.val());
  let classname = $(this).attr("id");
  if (classname === "menos") {
    if (current_value == min) {
      return;
    } else {
      cantidad.val(current_value - 1);
    }
  } else {
    if (current_value == max) {
      return;
    } else {
      cantidad.val(current_value + 1);
    }
  }
});
$(".cantidad").change(function () {
  let min = parseInt($(this).attr("min"));
  let max = parseInt($(this).attr("max"));
  if (parseInt($(this).val()) < min) {
    $(this).val(min);
  } else if (parseInt($(this).val()) > max) {
    $(this).val(max);
  }
});

let shoppingCartW = $("#shopping-cart").width();
$(document).ready(function () {
  shoppingCartW = $("#shopping-cart").width();
  $("#shopping-cart").css("right", "calc(-" + shoppingCartW + "px - 2rem");
});
$(window).resize(function () {
  shoppingCartW = $("#shopping-cart").width();
});
let shoppingCart = "close";
$("#btn-shopping-cart").click(function () {
  if (shoppingCart == "close") {
    $("#shopping-cart").css("right", "0%");
    shoppingCart = "open";
  } else {
    $("#shopping-cart").css("right", "calc(-" + shoppingCartW + "px - 2rem");
    shoppingCart = "close";
  }
});
$("#close-shopping-cart").click(function () {
  $("#shopping-cart").css("right", "calc(-" + shoppingCartW + "px - 2rem");
  shoppingCart = "close";
});

const slider = document.querySelector("#cart-sugeridos");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

$(window).ready(function () {
  $("#modal-suscribe").modal("show");
});
