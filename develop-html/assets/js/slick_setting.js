// ***********************************************
// slick setting (sample)
// ***********************************************
$('.slider').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive:[
    {
      breakpoint:769,
      settings: {
        slidesToShow:1
      }
    }
  ]
});