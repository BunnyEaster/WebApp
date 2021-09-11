// $(".slider").slick({
//   infinite: true,
//   dots: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   fade: true,
//   fadeSpeed: 500,
//   //   slidesToShow: 2,s
// });

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

// window.onscroll = function () {
//   if (window.innerWidth > window.innerHeight) {
//     if (window.pageYOffset > window.innerWidth - window.innerHeight) {
//       $(".bg-img").addClass("fix-search");
//     } else {
//       $(".bg-img").removeClass("fix-search");
//     }
//   } else {
//     $(".bg-img").addClass("fix-search");
//     $(".fix-search").css("background-position", "top");
//   }
// };

// if (window.innerWidth < window.innerHeight) {
//   $(".bg-img").addClass("fix-search");
//   $(".fix-search").css("background-position", "top");
// }

function navswitch() {
  var x = document.getElementById("nav");
  var x2 = document.getElementById("wallet-btn");
  var burger = document.getElementById("fa-bars");
  var close = document.getElementById("fa-times");

  if (x.style.display === "flex") {
    x.style.display = "none";
    x2.style.display = "none";
    burger.style.display = "block";
    close.style.display = "none";
  } else {
    x.style.display = "flex";
    x2.style.display = "flex";
    burger.style.display = "none";
    close.style.display = "block";
  }
}

window.onload = function () {
  //hide the preloader
  document.querySelector(".preloader").style.display = "none";
};
var vid = document.getElementById("trail-video");

startvideo = () => {
  document.getElementById("video-popup").style.display = "block";
  vid.play();
};
closevideo = () => {
  document.getElementById("video-popup").style.display = "none";
  vid.pause();
};
