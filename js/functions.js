window.onload = function() {
 $('.matchHeight').matchHeight();
 $('.woocommerce-LoopProduct-link').matchHeight();    
}



    $("li.menu-item-has-children > a").append( "<span class='mobdrop'></span>" );
	$("li.menu-item-has-children a span.mobdrop").click(function() {
    $(this).parent().parent().siblings().removeClass( "show-sub-menu" );
    $(this).parent().parent().toggleClass( "show-sub-menu" );
    return false;
	});

	$("#menu-toggle").click(function() {
    $(this).toggleClass("close-menu");   
    $(".main-navigation ul#primary-menu").toggleClass('open-menu');    
        
    })

	$(".open-search>a").click(function() {
    $("#search-header").slideToggle( "slow"); 
    })

	$("#close-search").click(function() {
    $("#search-header").slideUp( "slow"); 
    })

	$("#show-filters").click(function() {
    $(this).toggleClass( "show-filters-open" );    
    $("#display-filters").slideToggle( "slow"); 
    })





$(window).scroll(function () {
        if($(document).scrollTop()>$(window).height()){

            $('#masthead').addClass('scrolled');

        }
        else {

            $('#masthead').removeClass('scrolled');

        }
      }); 
