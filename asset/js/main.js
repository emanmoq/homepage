
$(document).ready(function () {

/**footer owl */
$('.FeatureOwl').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
        },
        1000:{
            items:3,
            margin:30,
        }
      
    }
});
$('.siteOwl').owlCarousel({
    autoplay: true,
    loop: true,
    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
        },
        1000:{
            items:3,
            margin:30,
        }
      
    }
});
if ($('#cp_side-menu-btn, #cp-close-btn').length) {

    $('#cp_side-menu-btn, #cp-close-btn').on('click', function(e) {

        var $navigacia = $('body, #cp_side-menu'),

            val = $navigacia.css('left') === '410px' ? '0px' : '410px';

        $navigacia.animate({

            left: val

        }, 410)

    });

}
if ($('#content-1').length) {

    $("#content-1").mCustomScrollbar({

        horizontalScroll: false

    });

    $(".content.inner").mCustomScrollbar({

        scrollButtons: {

            enable: true

        }

    });

}
});
