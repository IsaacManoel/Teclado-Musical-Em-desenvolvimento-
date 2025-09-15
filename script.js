let c = document.querySelector(".do");
let d = document.querySelector(".re");
let e = document.querySelector(".mi");
let f = document.querySelector(".fa");
let g = document.querySelector(".so");
let a = document.querySelector(".la");
let b = document.querySelector(".ci");
let c8 = document.querySelector(".du");

/*----------------------------------------*/
let som1 = new Audio("do.mp3");
let som2 = new Audio("re.mp3");
let som3 = new Audio("mi.mp3");
let som4 = new Audio("fa.mp3");
let som5 = new Audio("so.mp3");
let som6 = new Audio("la.mp3");
let som7 = new Audio("ci.mp3");
let som8 = new Audio("du.mp3");

/*----------------------------------------*/
c.addEventListener("mouseenter", tocarSom);
c.addEventListener("mouseleave", pararSom);
/*-----------------------------------------*/
d.addEventListener("mouseenter", tocarSom2);
d.addEventListener("mouseleave", pararSom2);
/*-----------------------------------------*/
e.addEventListener("mouseenter", tocarSom3);
e.addEventListener("mouseleave", pararSom3);
/*-----------------------------------------*/
f.addEventListener("mouseenter", tocarSom4);
f.addEventListener("mouseleave", pararSom4);
/*-----------------------------------------*/
g.addEventListener("mouseenter", tocarSom5);
g.addEventListener("mouseleave", pararSom5);
/*-----------------------------------------*/
a.addEventListener("mouseenter", tocarSom6);
a.addEventListener("mouseleave", pararSom6);
/*-----------------------------------------*/
b.addEventListener("mouseenter", tocarSom7);
b.addEventListener("mouseleave", pararSom7);
/*-----------------------------------------*/
c8.addEventListener("mouseenter", tocarSom8);
c8.addEventListener("mouseleave", pararSom8);

/*----------------------------------------*/
function tocarSom (){
    som1.play();
}
function pararSom (){
    som1.pause();
    som1.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom2 (){
    som2.play();
}
function pararSom2 (){
    som2.pause();
    som2.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom3 (){
    som3.play();
}
function pararSom3 (){
    som3.pause();
    som3.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom4 (){
    som4.play();
}
function pararSom4 (){
    som4.pause();
    som4.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom5 (){
    som5.play();
}
function pararSom5 (){
    som5.pause();
    som5.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom6 (){
    som6.play();
}
function pararSom6 (){
    som6.pause();
    som6.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom7 (){
    som7.play();
}
function pararSom7 (){
    som7.pause();
    som7.currentTime = 0;
}
/*----------------------------------------*/
function tocarSom8 (){
    som8.play();
}
function pararSom8 (){
    som8.pause();
    som8.currentTime = 0;
}