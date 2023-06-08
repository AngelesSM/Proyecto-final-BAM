
let contador =0; 
let idcontador = document.getElementById("contador");

function muestroactual(contador) {
    idcontador.innerHTML=contador;
}

function sumaclicks(){
    muestroactual(++contador);
}

function reseteocontador(){
    contador=0;
    muestroactual(contador);
}

// *********** nav links ***********

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

// *********** date ***********
const date = document.getElementById ("date");
date.innerHTML = new Date().getFullYear();

