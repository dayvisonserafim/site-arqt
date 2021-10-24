    // Filtro portfólio

    $('.filter-btn').on('click', function() {

      let type = $(this).attr('id');
      let boxes = $('.project-box');
  
      $('.main-btn').removeClass('active');
      $(this).addClass('active');
  
      if(type == 'res-btn') {
        eachBoxes('res', boxes);

      } else if(type == 'cmr-btn') {
        eachBoxes('cmr', boxes);

      } else if(type == 'apt-btn') {
        eachBoxes('apt', boxes);

      } else if(type == 'std-btn') {
        eachBoxes('std', boxes);

      } else if(type == 'pln-btn') {
        eachBoxes('pln', boxes);
      } else {
        eachBoxes('all', boxes);
      }
    });
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }

// Rolar o scroll ocultar a barra de menu
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
 


