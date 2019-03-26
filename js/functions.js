    $("#display-filters").slideToggle( "slow"); 
    })

jQuery( document ).ready(function($) {
    
  var allPanels = $('.toggle-content').hide();
    
  $('.toggle-title').click(function() {
    allPanels.slideUp();
       $this = $(this);
      $target =  $this.next();
      
    
      if($target.hasClass('active')){
        $target.removeClass('active').slideUp(); 
        $this.removeClass('active');   
      }else{
        allPanels.prev().removeClass('active');
        allPanels.removeClass('active').slideUp();
        $target.addClass('active').slideDown();
        $this.addClass('active'); 
      }
      
    return false;
  });
	
	
	    var alltogglelist = $('.togglelist-content');  
        var alltogglelisttitle = $('.togglelist-title');  
  $('.togglelist-title').click(function() {
      $this = $(this);
      $target =  $this.next();
        alltogglelist.removeClass('active').slideUp();  
         alltogglelisttitle.removeClass('active');   
      if($target.hasClass('active')){
        $target.removeClass('active').slideUp(); 
        $this.removeClass('active');   
      }else{
        $target.addClass('active').slideDown();
        $this.addClass('active'); 
      }
      
    return false;      
      
            
  });

});



$(window).scroll(function () {
        if($(document).scrollTop()>$(window).height()){

            $('#masthead').addClass('scrolled');

        }
        else {

            $('#masthead').removeClass('scrolled');

        }
      }); 
