$('.slider-for').slick({
    slideToShow:1,
    slideToScroll:1,
    arrows:false,
    fade:1,
    asNavFor:'.slider-nav',
});
$('.slider-nav').slick({
    slideToShow:3,
    slideToScroll:1,
    asNavFor:'.slider-for',
    dots:true,
    focusOnSelect:true
});

$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data(slide);
    $('.slider-nav').slick('slickGoTo', 'slide -1');
});