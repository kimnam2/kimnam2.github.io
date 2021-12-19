$(document).ready(function () {

    new ScrollBooster({
        viewport: document.querySelector('.index-list'),
        content: document.querySelector('.index-list__content'),
        direction: "vertical",
        scrollMode: "transform"
      });

    $('.index-list__content li').hover(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var idx = $(this).index() + 1;
        $('.img_'+ idx).addClass('active').siblings().removeClass('active');
    })
    // $('.img-wrap__content > a').hover(function(){
    //     $(this).children(".img-wrap__img").addClass('hover').siblings().children(".img-wrap__img").removeClass('hover');
    // })
})
