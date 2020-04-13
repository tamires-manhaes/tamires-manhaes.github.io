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

jQuery( document ).ready(function() {
    jQuery('#hero').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
    });

    jQuery( 'scroll' ).click(function( event ) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery(jQuery(this).attr('href')).offset().top }, 600);
    });
});