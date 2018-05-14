/*jslint browser: true*/
/*global $ */

$(document).ready(function () {
    "use strict";
    
    // Parallax Effect
    var jumboHeight = $('.jumbotron').outerHeight();
    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.bg').css('height', (jumboHeight - scrolled) + 'px');
    }

    $(window).scroll(function (e) {
        parallax();
    });
    
    // Text Fader
    $('.flyer>span:not(:first-child)').hide();
    var count = 1;
    setInterval(function () {
        var objs = $('.flyer>span');
        objs.hide();
        $(objs[count % objs.length]).fadeIn();
        count++;
    }, 1000);
    
    //code on carousel settings
    $('#myCarousel').carousel({
        interval: 5000,
        pause: "hover"
    });
    
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item").click(function () {
        $("#myCarousel").carousel(1);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#myCarousel").carousel("prev");
    });
    
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

