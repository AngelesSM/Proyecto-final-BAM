// *********** nav links ***********

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});

// *********** Turno ***********
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
    var datos = document.getElementById("nombre", "apellido", "os_p", "celular", "email", "dni").value;
    if(datos.length == 0) {
    alert('No has escrito nada');
    return;
    }
    
    alert("Le enviaremos un mail con la informacion requerida");
    document.formulario.submit();
}

// *********** fecha ***********
const date = document.getElementById ("date");
date.innerHTML = new Date().getFullYear();