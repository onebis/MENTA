$(document).ready(function(){
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        arrows:true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,

        prevArrow:'<div class="prev"><</div>',
        nextArrow:'<div class="next">></div>'
        }
    );
});
