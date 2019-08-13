$(document).ready(function () {

    if ($(window).width() < 1169) {
        startCarousel();
    }

    $(window).resize(function () {
        if ($(window).width() < 1169) {
            startCarousel();
        } else {
            stopCarousel();
        }
    });

    function startCarousel() {
        $('.owl-carousel').owlCarousel({
            items: 1,
            margin: 2,
            loop: true,
            video: true,
            lazyLoad: true,
            center: true,
            dots: false,
            nav: true,
            navText: [],
        });

        $('.play_button_icon').width(28); // ширину элемента переопределять через js? ну такое..
    }

    function stopCarousel() {
        var owl = $('.owl-carousel');
        owl.trigger('destroy.owl.carousel');
    }

    $('#burger-button').click(function (evt) { // если это просто кнопка - зачем делать ее ссылкой?
        evt.preventDefault();
        $(this).toggleClass('burger__button-close');
        $('#main-menu, #nav-wrapper').toggleClass('visible');
    });
});