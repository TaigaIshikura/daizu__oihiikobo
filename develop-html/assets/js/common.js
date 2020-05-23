var $win = $(window),
    $body = $('body');

// smoothScroll
// ***********************************************
(function(){
  $('a[href^="#"]').on('click',function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').stop().animate({scrollTop:position}, speed, 'swing');
    return false;
  });
}());

// pageTop
// ***********************************************
(function(){
  var $pagetop = $('#pagetop');
    $pagetop.on('click',function(){
    $('html,body').animate({scrollTop:'0'},500);
  });
}());