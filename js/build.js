// Shorthand for $( document ).ready()
$(function() {
    console.log( "Yay! I work!" );

    // ALL JAVASCRIPT GOES HERE 

		$('.student .grid-container .grid-33 a.button').click(function (e){
			e.preventDefault();
			$('.student-details').addClass('.open').slideToggle();
		});


    // Header image
    var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    ni = "none"
    hdr = $('.title').height();

    $(window).scroll(function() {   
      if( $(this).scrollT   op() > hdr ) {  
        mn.addClass(mns);   
        mn.next().addClass('none'); // Add image back once it gets back to the    top.
      } else {
        mn.removeClass(mns, '.title');
        mn.next().removeClass('none');
      }
    });

});