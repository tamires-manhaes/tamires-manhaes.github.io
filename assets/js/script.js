const img = document.querySelector("#img");
const titulo = document.querySelector(".titulo");
const subtitulo = document.querySelector(".subtitulo");
const contatos = document.querySelector(".contatos");

const animation = new TimelineMax();

animation.fromTo(img , 1.5, {opacity: "0"}, {opacity: "1"}, Power2.easeInOut);
animation.fromTo(titulo, 1.2, {x: "-200%"}, {x: "0%"}, Power2.easeInOut);
animation.fromTo(subtitulo, 1.2,{x: "200%"}, {x: "0%"}, Power2.easeInOut);
animation.fromTo(contatos, 1.2, {x: "-200%"}, {x: "0%"}, Power2.easeInOut);


$(".box").scroll(function(){ alert("acroll"); })