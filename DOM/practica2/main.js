function redondear(elemento) {
    
    alert("hola");

}

function eliminar(elemento) {
    
    var padre = elemento.parentNode;
    var abuelo = padre.parentNode;
    abuelo.removeChild(padre);
}