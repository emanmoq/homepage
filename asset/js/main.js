
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
});
