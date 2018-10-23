function hola() {
    alert("hola");
}


function cargar() {
    alert("funcion cargar");
    document.getElementById("contenido").addEventListener("click", hola, false);
}  

document.addEventListener("DOMContentLoaded", cargar, false);