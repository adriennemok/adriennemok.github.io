/*jslint browser: true*/
/*global $ */

$(document).ready(function () {
    "use strict";    
    // Text Fader
//    $('.flyer>span:not(:first-child)').hide();
//    var count = 1;
//    setInterval(function () {
//        var objs = $('.flyer>span');
//        objs.hide();
//        $(objs[count % objs.length]).fadeIn();
//        count++;
//    }, 2000);
        
var quotes = $(".delayedText");
var quoteIndex = -1;

function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
        .fadeIn(1000)
        .delay(1000)
        .fadeOut(1000, showNextQuote);
}

showNextQuote();
    //smooth scrolling
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

