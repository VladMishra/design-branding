$(document).ready(function () {
   $('.articles-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
       accessibility: true,
       arrows: true,
       variableWidth: true,
       responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
              }
            }
        ]
   }); 
    $('.clients-list').slick({
       infinite: true,
       slidesToShow: 6,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
       accessibility: true,
       arrows: true,
       variableWidth: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false
              }
            }
        ]
   });
    $('.update-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 4000,
       accessibility: true,
       arrows: true,
       variableWidth: true,
    responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false
              }
            }
        ]
   });
    $('.portfolio-list').slick({
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 4000,
       accessibility: true,
       arrows: true,
       variableWidth: true,
       dots: true,
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                arrows: false
              }
            }
       ]
   });
});
