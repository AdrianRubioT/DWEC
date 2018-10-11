

function prueba() {
    var p1 = document.getElementsByTagName("p");
    alert(p1[0].innerText);
    alert(p1[1].innerText);
}

function crearElemento() {
  /*   var elemento = document.getElementByName("div");

    var newElement = createElement("p");
    newElement.createTextNode("hola caracola");

     */

    var nuevoElemento = document.createElement("p");
    var texto = document.createTextNode("hola caracola");
    nuevoElemento.appendChild(texto);
    
    document.getElementsBytagName("div")[0].appendChild(nuevoElemento);
    

/*     document.getElementsByTagName("div")[0].appendChild(document.createElement("p").appendChild(document.createTextNode("hola caracola")));
 */

}