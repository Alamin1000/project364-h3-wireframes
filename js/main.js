(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".trust-slider-active").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: false,
    center: true,
    autoWidth: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
  $(".team-slider-active").owlCarousel({
    loop: true,
    margin: 48,
    responsiveClass: true,
    nav: true,
    dots: false,
    items: 3,
    navText: [
      '<i class="far fa-chevron-right"></i>',
      '<i class="far fa-chevron-left"></i>',
    ],
    responsive: {
      0: {
        nav: false,
        dots: true,
        margin: 10,
        items: 2,
      },
      767: {
        nav: false,
        dots: true,
        margin: 20,
      },
      991: {
        nav: true,
        dots: false,
      },
      1000: {
        nav: true,
        dots: false,
      },
    },
  });
  $(".fs-slider-active").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    nav: true,
    dots: false,
    items: 3,
    dotsEach: 1,
    navText: [
      '<i class="far fa-chevron-right"></i>',
      '<i class="far fa-chevron-left"></i>',
    ],
    responsive: {
      0: {
        nav: false,
        dots: false,
        margin: 10,
        items: 2,
        autoWidth: true,
        loop: false,
      },
      575: {
        nav: false,
        dots: true,
        margin: 10,
        items: 2,
      },
      767: {
        nav: false,
        dots: true,
        margin: 20,
      },
      991: {
        nav: true,
        dots: false,
      },
      1000: {
        nav: true,
        dots: false,
      },
    },
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);

  // nice-select
  $(".nice-select").niceSelect();
});
