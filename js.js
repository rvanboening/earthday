function parallax(){
 var section = document.getElementById('parallax1');
 
 section.style.top = -(window.pageYOffset / 6)+'px';
}
window.addEventListener("scroll", parallax, false);

  parallax();


// NavBar
  $(function(){
      $('#header_nav').data('size','big');
  });

  $(window).scroll(function(){
      var $nav = $('#header_nav');
      if ($('body').scrollTop() > 0) {
          if ($nav.data('size') == 'big') {
              $nav.data('size','small').stop().animate({
                  height:'50px'
              }, 600);
          }
      } else {
          if ($nav.data('size') == 'small') {
              $nav.data('size','big').stop().animate({
                  height:'200px'
              }, 600);
          }  
      }
  });