$(".slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
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
  //   if (window.pageYOffset > window.innerHeight) {
  //     $(".bg-img").addClass("fix-search");
  //   } else {
  //     $(".bg-img").removeClass("fix-search");
  //   }
  if (window.pageYOffset > window.innerWidth - window.innerHeight) {
    $(".bg-img").addClass("fix-search");
  } else {
    $(".bg-img").removeClass("fix-search");
  }
};
