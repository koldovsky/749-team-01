const scheduleSwiper = new Swiper('.schedule-daily-container',{
    loop: true,
    navigation: {
        nextEl: '.schedule-slider-next',
        prevEl: '.schedule-slider-prev',
      },
      simulateTouch: true,
      touchRadio: 1,
      touchAngle: 45,
      grabCursor: true,
      autoHeight: true,
      spaceBetween: 10,
      watchOverflow: true,
      breakpoints:{
        380:{
            slidesPerView: 1,
        },
        480:{
            slidesPerView: 1,
        },
        770:{
            slidesPerView:2
        },
        1200:{
            slidesPerView:3
        },
      }
});
