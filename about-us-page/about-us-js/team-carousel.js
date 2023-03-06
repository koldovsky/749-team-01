(function () {
const swiperProject = new Swiper('.swiper', {
  naviation: {
    nextEL: '.swiper-button-next',
    prevEL: '.swiper-button-prev'
  },
  simulateTouch: true,
      touchRadio: 1,
      touchAngle: 45,
      grabCursor: true,
      autoHeight: true,
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints:{
        768:{
            slidesPerView: 2,
        },
        996:{
            slidesPerView:3
        },
      }
});
})();
