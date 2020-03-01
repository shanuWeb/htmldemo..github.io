jQuery(window).load(function(){

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
$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});
