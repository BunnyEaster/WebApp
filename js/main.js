$(".slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 800,
  fade: true,
  fadeSpeed: 1000,
  //   slidesToShow: 2,s
});

// header
// var wrap = $(".bg-img");

// $("header").on("scroll", () => {
//   console.log("this.scrollTop");
//   if (this.scrollTop > window.innerHeight) {
//     $(".bg-img").addClass("fix-search");
//   } else {
//     $(".bg-img").removeClass("fix-search");
//   }
// });

window.onscroll = function () {
  if (window.innerWidth > window.innerHeight) {
    if (window.pageYOffset > window.innerWidth - window.innerHeight) {
      $(".bg-img").addClass("fix-search");
    } else {
      $(".bg-img").removeClass("fix-search");
    }
  } else {
    $(".bg-img").addClass("fix-search");
    $(".fix-search").css("background-position", "top");
  }
};

if (window.innerWidth < window.innerHeight) {
  $(".bg-img").addClass("fix-search");
  $(".fix-search").css("background-position", "top");
}

function navswitch() {
  var x = document.getElementById("nav");
  var x2 = document.getElementById("wallet-btn");
  var burger = document.getElementById("fa-bars");
  var close = document.getElementById("fa-times");
  // var x3 = document.getElementById("social");
  // var navClass = document.getElementsByClassName("navbar");
  // var hrg = document.getElementById("hrgrad");

  if (x.style.display === "flex") {
    x.style.display = "none";
    x2.style.display = "none";
    burger.style.display = "block";
    close.style.display = "none";
    // hrg.style.display = "none";
    // x3.style.display = "none";
    // navClass.style.flexDirection = "row";
  } else {
    x.style.display = "flex";
    x2.style.display = "flex";
    burger.style.display = "none";
    close.style.display = "block";
    // hrg.style.display = "block";
    // x3.style.display = "flex";
    // navClass.style.flexDirection = "column";
  }
}
