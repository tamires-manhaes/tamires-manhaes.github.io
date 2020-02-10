const img = document.querySelector("#img");
const titulo = document.querySelector(".titulo");
const subtitulo = document.querySelector(".subtitulo");
const contatos = document.querySelector(".nav-hamburguer");

const animation = new TimelineMax();

animation.fromTo(img , 1.7, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(titulo, 2, {opacity: "0"}, {opacity: "1"}, Power2.easeInOut);
animation.fromTo(subtitulo, 2,{opacity: "0"}, {opacity: "1"}, Power2.easeInOut);
animation.fromTo(contatos, 2, {opacity: "0"}, {opacity: "1"}, Power2.easeInOut);

$(document).ready(function(){
    $("#hero").click(function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });

    var swiper = new Swiper('.descricao-experiencias .swiper-container', {
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
    });
});
