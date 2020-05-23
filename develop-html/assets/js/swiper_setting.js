// ***********************************************
// swiper setting (sample)
// ***********************************************
var swiper;
$(window).on('load',function() {
  swiper = new Swiper('.swiper-container', {
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 'auto',
    spaceBetween:0,
    autoplay: {
      delay: 5000,
    }
  });
});