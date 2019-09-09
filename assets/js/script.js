const img = document.querySelector("#img");
const titulo = document.querySelector(".titulo");
const subtitulo = document.querySelector(".subtitulo");
const contatos = document.querySelector(".contatos");

const animation = new TimelineMax();

animation.fromTo(img , 1.7, {opacity: "0"}, {opacity: "1"}, Power2.easeIn);
animation.fromTo(titulo, 2, {x: "-50%"}, {x: "0%"}, Power2.easeInOut);
animation.fromTo(subtitulo, 2,{x: "50%"}, {x: "0%"}, Power2.easeInOut);
animation.fromTo(contatos, 2, {x: "-50%"}, {x: "0%"}, Power2.easeInOut);


$(".box").scroll(function(){ alert("acroll"); })
