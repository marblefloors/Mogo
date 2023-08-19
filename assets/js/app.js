$(function() {

    var introH = $("#intro").innerHeight(),
        header = $("#header"),
        scrollOffset = $(window).scrollTop(),
        headerMenu = $("#menu"),
        isClicked = false;


    // Fixed Header
    checkScroll(scrollOffset);    
    
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
        
    });

    function checkScroll(scrollOffset) {

        if (scrollOffset >= introH) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }

    }
    
    // Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        console.log(blockOffset);

        $("#nav a").removeClass("active");
        $(this).addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        });
        
    });
    
    // Menu

    // Menu click
    $("#menu").on("click", function(event) {
        event.preventDefault();
        
        $("#nav").toggleClass("active");
        
        if (isClicked == false) {
            headerMenu.addClass("active");
            isClicked = true;
        } else {
            headerMenu.removeClass("active");
            isClicked = false;
        }

    });
    
    
});