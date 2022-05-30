$(document).ready(function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 1,
        arrows: false,
    });

    splide.mount();

    playCount = 0;

    $(window).scroll(function() {
        var hT = $('.js-sleepeApplication').offset().top,
            wH = $(window).height(),
            wS = $(this).scrollTop();

        if (wS > (hT - wH) && playCount == 0) {
            const video = $("#infoVideo")[0];
            video.play();
            playCount = playCount + 1;
        }
    });
});