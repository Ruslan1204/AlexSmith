const swiper = new Swiper('.portfolio__slider', {
  // Optional parameters

  loop: true,
  // slidesPerView: 3,
  spaceBetween: 42,

  navigation: {
    nextEl: '.portfolio__arrow_left',
    prevEl: '.portfolio__arrow_right',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 5,
      autoHeight: true,
    },
    // when window width is >= 480px
    650: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 42,
    },
  },
});

// loop="true"
// observerPerents="true"
// slidesPerView="3"
// speceBetween="56"
// speed="800"
