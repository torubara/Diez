$(document).ready(function() {
  if ( $(window).width() < 1169 ) {
    startCarousel();
  }
  else {}
});

$(window).resize(function() {
    if ( $(window).width() < 1169 ) {
      startCarousel();
    }
    else {
      stopCarousel();
    }
});

function startCarousel(){
    $('.owl-carousel').owlCarousel({
        items:4,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        nav:true,
        navText : ["",""],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            }
        }
    });

    $('.play_button_icon').width(28)
}

function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
}