$(document).ready(function() {
    var nav = $('#nav-m'); 
    var menum = $('.menum');
    var subMenum = $('.submenum');
    var toggle = $('.toggle');
    var subToggle = $('.submenu-toggle');
    var back = '<div class="hide-submenum"></div>';
    var subHide = $(back);

    // Toggle menu
    toggle.on("click", function() {
        nav.toggleClass('is-visible');
        if(menum.hasClass('visually-hidden')) {
            menum.toggleClass('visually-hidden is-visible');
        } else {
            menum.removeClass('is-visible');
            // Wait for CSS animation
            setTimeout(function() {
                nav.removeClass('view-submenum');
                menum.addClass('visually-hidden');
            }, 200);
        }
    });

    // Add submenu hide bar
    subHide.prependTo(subMenum);
    var subHideToggle = $('.hide-submenum');

    // Show submenu
    subToggle.on("click", function() {
        nav.addClass('view-submenum');
        // Hide all the submenus...
        subMenum.hide();
        // ...except for the one being called
        $(this).parents('li').find('.submenum').show();
    });

    // Hide submenu
    subHideToggle.on("click", function() {
        nav.removeClass('view-submenum');
    });
    
// Function to adjust body padding based on the height of .size-m
function adjustBodyPadding() {
    var sizeM = $('.size-m');
    if (sizeM.length) {
        var sizeMHeight = sizeM.outerHeight();
        var percentage = 1.5; // 150% of the height, change as needed
        var padding = sizeMHeight * percentage;
        $('body').css('padding-top', padding + 'px');
    }
}

// Function to check if the device is mobile and adjust body padding
function checkMobileAndAdjust() {
    if ($(window).width() <= 767) { // Mobile breakpoint
        adjustBodyPadding();
    } else {
        $('body').css('padding-top', '0'); // Reset padding on non-mobile devices
    }
}

// Run on page load and resize
$(window).on('load resize', checkMobileAndAdjust);

// Initial check on page load
checkMobileAndAdjust();

});