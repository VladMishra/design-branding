$(function(){
    $('.banner-slider').slick({
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        dots: true,
        speed: 700,
        arrows: false
    });
    $('.quote-slider').slick({
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        dots: true,
        speed: 700,
        arrows: false
    });
    $('.portfolio-slider').slick({
        
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false, 
        dots: true,
        speed: 700,
        arrows: true,
        appendArrows: '.slider-controls',
        prevArrow: '<div class=portfolio-slider-left><button type="button" class="slick-prev"></button></div>',
        nextArrow: '<div class=portfolio-slider-right><button type="button" class="slick-next"></button></div>'
    });
})