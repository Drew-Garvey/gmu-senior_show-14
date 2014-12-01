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

var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    ni = "none"
    hdr = $('.title').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
    mn.next().addClass('none'); // Add image back once it gets back to the top.
  } else {
    mn.removeClass(mns, '.title');
  }
});