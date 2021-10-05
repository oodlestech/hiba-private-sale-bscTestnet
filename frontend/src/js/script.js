import $ from 'jquery';

$('.loader-wrapper').fadeOut('slow', function() {
    $(this).remove();
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 600) {
        $('.tap-top').fadeIn();
    } else {
        $('.tap-top').fadeOut();
    }
});
$('.tap-top').on("click",  function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});


// (function($, window, document, undefined) {
    // "use strict";
    var $ripple = $(".js-ripple");
    $ripple.on("click.ui.ripple", function(e) {
        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find(".c-ripple__circle");
        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;
        $circle.css({
            top: y + "px",
            left: x + "px"
        });
        $this.addClass("is-active");
    });
    $ripple.on(
        "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
        function(e) {
            $(this).removeClass("is-active");
        });
// })($, window, document);

$(".chat-menu-icons .toogle-bar").on("click", function(){
    $(".chat-menu").toggleClass("show");
});

// active link
$('.footer.footer-fix').parents('.page-body-wrapper').addClass('hasfooterfix'); 
// new WOW().init();
