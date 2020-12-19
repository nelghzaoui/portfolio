(function ($) {
  'use strict'; // Start of use strict

  /* Smooth scrolling using jQuery easing */
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 72,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  /* Closes responsive menu when a scroll trigger link is clicked */
  $('div.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  /* Activate scrollspy to add active class to navbar items on scroll */
  $('body').scrollspy({
    target: '#navbar',
    offset: 75,
  });

  /* Collapse Navbar */
  //TODO: find a way to detect screen size (jerrylow)
  const navOffset = 100;

  const navbarCollapse = () => {
    const nav = $('#navbar');
    if (nav.length) {
      if (nav.offset().top > navOffset) {
        nav.addClass('navbar-scrolled bg-dark');
      } else {
        nav.removeClass('navbar-scrolled bg-dark');
      }
    }
  };

  /* Collapse now if page is not at top */
  navbarCollapse();
  /* Collapse the navbar when page is scrolled */
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  // const projects = $('#projects');

  // if (projects.length) {
  //     projects.children('section').magnificPopup({
  //         delegate: 'a',
  //         type: 'image',
  //         tLoading: 'Loading image #%curr%...',
  //         mainClass: 'mfp-img-mobile',
  //         gallery: {
  //             enabled: true,
  //             navigateByImgClick: true,
  //             preload: [0, 1]
  //         },
  //         image: {
  //             tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  //         }
  //     });
  // }
})(jQuery); // End of use strict
