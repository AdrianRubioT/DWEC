


function hola() {
    alert("hola");
}


function cargar() {
    alert("funcion cargar");
    document.getElementById("contenido").addEventListener("click", hola(), false);    
} 
/* document.getElementById("contenido").addEventListener("click", hola(), false);
 */
document.addEventListener("load", cargar(), false);