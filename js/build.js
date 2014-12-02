// Shorthand for $( document ).ready()
$(function() {
    console.log( "Yay! I work!" );

    // ALL JAVASCRIPT GOES HERE 

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
          scrollTop: target.offset().top
          }, 800);
        return false;
      }
    }
  });      
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
    mn.next().removeClass('none');
  }
});


$('a')