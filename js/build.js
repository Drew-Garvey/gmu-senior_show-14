// Shorthand for $( document ).ready()
$(function() {
    console.log( "Yay! I work!" );

    // ALL JAVASCRIPT GOES HERE 

    // expander is to show and hide details in the student section


			// Show/Hide Solution.
			//$('#student-1 a').click(function (e){
			//	e.preventDefault();
			//	$('.student-details').addClass('.open').slideToggle();
			//});

			$('.student .grid-container .grid-33 a.button').click(function (e){
				e.preventDefault();
				$('.student-details').addClass('.open').slideToggle();
			});
});