jQuery(window).load(function(){
$('.marquee').marquee();
	//jQuery(".site-header").sticky({ topSpacing: 0, zIndex:99999 });
	
	var btn = jQuery('.toggle-terget .toggle-menu');
	btn.on('click', function() {
		//$(this).toggleClass('active');
	  	jQuery(".main-menu").toggleClass('show');
	  	jQuery(this).parent().toggleClass('open');
	  	jQuery(this).toggleClass('open');
	  	jQuery('body').toggleClass('overflow');
	});
});

$(window).scroll(function(){
  var sticky = $('.site-header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


	// Scroll To Top JS //

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100){
			$('.gotopbtn').fadeIn(1000);
		} 
		else{
			$('.gotopbtn').fadeOut(1000);
		}
	});
	$('.gotopbtn').click(function(){
		$("html, body").animate({scrollTop : 0},700);
		return false;
	});

	// Scroll To Top JS //

$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});
