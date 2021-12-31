(function ($) {
    "use strict";

    /*====================================
        Search JS
    ======================================*/
    $('.top-search a').on("click", function (e) {
        e.preventDefault();
        $('.search-top').toggleClass('active');
    });

    /*====================================
			Portfolio Details JS
		======================================*/
    $('.home-slider').owlCarousel({
        items:1,
        autoplay:false,
        autoplayTimeout:5000,
        smartSpeed: 400,
        autoplayHoverPause:true,
        loop:true,
        merge:true,
        nav:true,
        dots:true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    });


    /*====================================
        Scrool Up JS
    ======================================*/
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 1000,            // Speed back to top (ms)
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: ["<i class='fa fa-angle-up'></i>"], // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 99999                // Z-Index for the overlay
    });
    //
    // /*====================================
    //     Preloader JS
    // ======================================*/
    // jQuery(window).load(function() {
    //     jQuery(".preeloader").fadeOut('slow', function(){
    //         jQuery(this).remove();
    //     });
    // });

})(jQuery);