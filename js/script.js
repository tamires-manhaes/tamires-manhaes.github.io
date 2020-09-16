const body = document.querySelector('body');

const animation = new TimelineMax();

animation.fromTo(body , 2, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);


(function( $ ){
    $( document ).ready(function() {
        $('#hero').click(function(){
          $('html, body').animate({scrollTop : 0},1500,)
        });
    });
    
    var date = new Date();
    var year = date.getFullYear();
    var yearOld = year - 1998;

    $('.sobre-mim .descricao span').html(yearOld);
    
})( jQuery );