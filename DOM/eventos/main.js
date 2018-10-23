
function sayhola() {
    alert("hola, esto es " + this.id);
}

/* var aux; */

function boton2() {
    document.getElementById("boton1").dispatchEvent( new Event("click") );
}

function cargar() {
    document.getElementById("boton1").addEventListener("click", sayhola, false);
    document.getElementById("boton2").addEventListener('click', boton2, false);
}


document.addEventListener("DOMContentLoaded", cargar, false);