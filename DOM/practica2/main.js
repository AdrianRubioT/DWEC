function redondear(elemento) {
    
    /* alert("hola"); */
   /* elemento.clasList.add('redondo'); */
   elemento.className += " redondo";


}

function eliminar(elemento) {
    
    var padre = elemento.parentNode;
    var abuelo = padre.parentNode;
    abuelo.removeChild(padre);
}