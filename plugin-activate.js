(function($jq) {
  $jq(document).ready(function() {
  	//sticky header
     $(window).scroll(function() {
        var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $("#Header").addClass("active");
      } else {
          $("#Header").removeClass("active");
        }
    });
	   //form validation
  	$("#formsimplevalidation").simpleValidation();
    // mobilemenu
    $(".mobile_menu").simpleMobileMenu()
  	//tab section
  	 $('.tab-title>a').click(function(e){
    	  e.preventDefault();
        var index = $(this).parent().index();
      $(this).parent().addClass('active')
         .siblings().removeClass('active')
         .parent('ul.tabs').siblings('.tabs-content').children('.content').removeClass('active')
         .eq(index).addClass('active');
    	});
     // smoothscroll
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
       if(target.length) {
           event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
     });
  });
})(jQuery)