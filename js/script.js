(function ($) {
	'use strict';

	/* ========================================================================= */
	/*	Pantalla de carga
	/* ========================================================================= */

	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});


	/* ========================================================================= */
	/*	Menu
	/* ========================================================================= */


	$('#navigation').sticky({
		topSpacing: 0
	});


	/* ========================================================================= */
	/*	Magnific popup
	/* =========================================================================  */
	$('.image-popup').magnificPopup({
		type: 'image',
		removalDelay: 160, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		closeOnContentClick: true,
		midClick: true,
		fixedContentPos: false,
		fixedBgPos: true
	});


	/* ========================================================================= */
	/*   Login
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {
		
		e.preventDefault();

		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		if (name.length === 0) {
			var error = true;
			$('#name').css('border-color', '#D8000C');
		} else {
			$('#name').css('border-color', '#666');
		}
		if (email.length === 0 || email.indexOf('@') === '-1') {
			var error = true;
			$('#email').css('border-color', '#D8000C');
		} else {
			$('#email').css('border-color', '#666');
		}
		if (subject.length === 0) {
			var error = true;
			$('#subject').css('border-color', '#D8000C');
		} else {
			$('#subject').css('border-color', '#666');
		}
		if (message.length === 0) {
			var error = true;
			$('#message').css('border-color', '#D8000C');
		} else {
			$('#message').css('border-color', '#666');
		}		
	});

})(jQuery);
// End Jquery Function


/* ========================================================================= */
/*	Animated section
/* ========================================================================= */

var wow = new WOW({
	offset: 100, // distance to the element when triggering the animation (default is 0)
	mobile: false // trigger animations on mobile devices (default is true)
});
wow.init();


/* ========================================================================= */
/*	Smooth Scrollin
/* ========================================================================= */
var scroll = new SmoothScroll('a[href*=\'#\']');