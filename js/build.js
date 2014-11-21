// Shorthand for $( document ).ready()
$(function() {
    console.log( "Yay! I work!" );

    // ALL JAVASCRIPT GOES HERE 

    // expander is to show and hide details in the student section


			//$('.student-details').click(function(e) {
			//$(this).next().slideToggle();
			//});

			// settings (elements)
			// $activeTab = $('.tabs .active');
			// $tab = $(this).parent('li');
			// targetID = $(this).attr('href');

			// functionality
			// $('.student-details').removeClass('open');
			// $(targetID).addClass('open');
			// $tab.addClass('active');

			// $('#row-1').load('student-chris.html .student-details');


			// // AJAX Solution
			// $('#row-1 a').click(function (e){
			// 	e.preventDefault();
			// 	console.log('a was clicked');
			// 	$('.student-details').load('student-chris.html');
			// });

			// Show/Hide Solution.
			$('#row-1 a').click(function (e){
				console.log('a');
				e.preventDefault();
				$('.student-details').addClass('.open').slideToggle();
			});

			// Window size detection conditional
			$(window).resize(function(){
				if ($(window).width() <= 1024){	
					// disable the .desktop divs
					$('.desktop, .student-details').css('display', 'none;');
					// load the .mobile divs
				} else {
					// disable the .mobile divs
					// load the .desktop divs
				}
});


});