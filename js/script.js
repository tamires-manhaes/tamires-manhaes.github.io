const home = document.querySelector('.home');
const menu = document.querySelector('.menu-top');
const sobreMim = document.querySelector('.sobre-mim');
const experiencias = document.querySelector('.experiencias');
const conhecimentos = document.querySelector('.conhecimentos');
const habilidades = document.querySelector('.habilidades'); 

const animation = new TimelineMax();

animation.fromTo(menu , 3, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(home , 3, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(sobreMim , 4, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(experiencias , 3, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(conhecimentos , 3, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(habilidades , 3, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);


(function( $ ){
    $( document ).ready(function() {
        $('#hero').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
        });

        // $( 'scroll' ).click(function() {
        //     // $("html, body").animate({ scrollTop: 0 }, 600);
        //     $('html, body').animate({
        //       scrollTop: $(hash).offset().top
        //     }, 800)
        // });
    });
    
    var date = new Date();
    var year = date.getFullYear();
    var yearOld = year - 1998;

    $('.sobre-mim .descricao span').html(yearOld);
    
})( jQuery );