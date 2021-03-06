// Shorthand for $( document ).ready()
$(function() {

    // ALL JAVASCRIPT GOES HERE 

    // Smooth Scrolling Function
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


    // Header Module
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

  // Modernizr - SVG/PNG IE image fallback.
  if (!Modernizr.svg) {
      var imgs = document.getElementsByTagName('img');
      var svgExtension = /.*\.svg$/
      var l = imgs.length;
      for(var i = 0; i < l; i++) {
          if(imgs[i].src.match(svgExtension)) {
              imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
              console.log(imgs[i].src);
          }
      }
  }

});

