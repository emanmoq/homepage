
$(document).ready(function () {

/**footer owl */
$('.FeatureOwl').owlCarousel({
    autoplay: false,
    loop: false,

    dots: false,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items:1,
        },
        1000:{
            items:3,
        }
      
    }
});
});
