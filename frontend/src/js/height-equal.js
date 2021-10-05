// "use strict";
import $ from 'jquery';

function equalizer(){
    var max = -1;
    $(".height-equal").css('min-height', 'auto');
    $('.height-equal').each(function() {
        var minHeight = $(this).outerHeight();
        max = minHeight > max ? minHeight : max;

    });
    $(".height-equal").css('min-height',max)
    if($( window ).width() <= 991 ) {
        $(".height-equal").css('min-height', 'auto');
    }

    $(".height-equal-2").css('min-height', 'auto');
    $('.height-equal-2').each(function() {
        var minHeight = $(this).outerHeight();
        max = minHeight > max ? minHeight : max;

    });
    $(".height-equal-2").css('min-height',max)
    if($( window ).width() <= 991 ) {
        $(".height-equal-2").css('min-height', 'auto');
    }
}
// (function($) {
    // "use strict";
    equalizer();
// })($);
$(window).resize(function() {
    equalizer();
});



