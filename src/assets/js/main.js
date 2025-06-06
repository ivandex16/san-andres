/*
Template Name: HostGrids - Hosting & Domain Services HTML Template.
Author: GrayGrids
*/

(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  // WOW active
  new WOW().init();

  /*=====================================
    Sticky
    ======================================= */

  // window.onscroll = function () {
  //   var header_navbar = document.querySelector(".navbar-area");
  //   var sticky = header_navbar.offsetTop;

  //   var logo = document.querySelector(".navbar-brand img");
  //   if (window.pageYOffset > sticky) {
  //     header_navbar.classList.add("sticky");
  //     logo.src = "assets/images/logo/san-andres-logo.png";
  //   } else {
  //     header_navbar.classList.remove("sticky");
  //     logo.src = "assets/images/logo/san-andres-logo-white.png";
  //   }

  //   // show or hide the back-top-top button
  //   var backToTo = document.querySelector(".scroll-top");
  //   if (backToTo) {
  //     if (
  //       document.body.scrollTop > 50 ||
  //       document.documentElement.scrollTop > 50
  //     ) {
  //       backToTo.style.display = "flex";
  //     } else {
  //       backToTo.style.display = "none";
  //     }
  //   }
  // };

  //===== mobile-menu-btn
  let navbarToggler = document.querySelector(".mobile-menu-btn");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      navbarToggler.classList.toggle("active");
    });
  }
})();

// $(document).ready(() => $("#content_main").load("./pages/home.html"));
// $(document).ready(() => $("#footer").load("./components/footer.html"));
