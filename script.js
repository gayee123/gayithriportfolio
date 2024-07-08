$(document).ready(function(){
    $(window).scroll(function(){
        // Sticky navbar on scroll script
        if ($(this).scrollTop() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if ($(this).scrollTop() > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, "slow");
        // Removing smooth scroll on slide-up button click
        $('html, body').css("scrollBehavior", "auto");
    });

    // Smooth scroll for menu items, excluding those with 'teams' class
    $('.navbar .menu li a').not('.teams a').click(function(e){
        e.preventDefault(); // Prevent default anchor behavior
        var target = $(this).attr('href'); // Get the target element's ID from the href attribute
        $('html, body').animate({
            scrollTop: $(target).offset().top // Scroll to the target element
        }, 'slow');
    });

    // Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
