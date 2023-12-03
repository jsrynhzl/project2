$(document).ready(function () {
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 200,
        pager: true
    });
});

$(document).ready(function () {
    $('.carousel').bxSlider({
        pager: false,
        controls: false,
        speed: 60000,
        useCSS: false,
        ticker: true,
        tickerHover: true,
        slideWidth: 250,
        responsive: false,
        minSlides: 1,
        maxSlides: 5,
    });
});