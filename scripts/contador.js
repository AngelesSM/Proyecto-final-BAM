
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

