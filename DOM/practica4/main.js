
function cargar() {
    document.getElementById("btnAniadir").addEventListener("click", aniadirCampo, false);
}


/* constantes para numerar los id y nombres de los label e input */
var dni = 0;
var nombre = 0;
var apellido = 0;

function aniadirCampo() {

    dni++;
    nombre++;
    apellido++;

    /* <div class="campo"> */
    var div_campo = document.createElement("div");
    div_campo.className += "campo";



    /*     
    <div class="DNI">
        <label for="dni">DNI</label>
        <input type="text" name="dni" id="dni">
    </div> 
    */

    /* <div class="DNI"> */
    var div_dni = document.createElement("div");
    div_dni.className += "DNI" + dni;

    /* <label for="dni">DNI</label> */
    var label_dni = document.createElement("label");
    var label_dni_text = document.createTextNode("DNI ");
    label_dni.appendChild(label_dni_text);
    label_dni.setAttribute("for", "dni" + dni);

    /* <input type="text" name="dni" id="dni"> */
    var input_dni = document.createElement("input");
    input_dni.setAttribute("type", "text");
    input_dni.setAttribute("name", "dni" + dni);
    input_dni.id = "dni" + dni;
    input_dni.disabled = true;

    /* <div class="DNI">...</div> */
    div_dni.appendChild(label_dni);
    div_dni.appendChild(input_dni);


    /*
    <div class="nombre">
        <label for="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre">
    </div> */

    /* <div class="nombre"> */
    var div_nombre = document.createElement("div");
    div_nombre.className += "nombre" + nombre;

    /* <label for="nombre">Nombre</label> */
    var label_nombre = document.createElement("label");
    var label_nombre_text = document.createTextNode("Nombre ");
    label_nombre.appendChild(label_nombre_text);
    label_nombre.setAttribute("for", "nombre" + nombre);

    /* <input type="text" name="nombre" id="nombre"> */
    var input_nombre = document.createElement("input");
    input_nombre.setAttribute("type", "text");
    input_nombre.setAttribute("name", "nombre" + nombre);
    input_nombre.id = "nombre" + nombre;
    input_nombre.disabled = true;

    /* <div class="nombre">...</div> */
    div_nombre.appendChild(label_nombre);
    div_nombre.appendChild(input_nombre);



    /* 
    <div class="apellido">
        <label for="apellido">Apellido</label>
        <input type="text" name="apellido" id="apellido">
    </div> */

    /* <div class="apellido"> */
    var div_apellido = document.createElement("div");
    div_apellido.className += "apellido" + apellido;

    /* <label for="apellido">Apellido</label> */
    var label_apellido = document.createElement("label");
    var label_apellido_text = document.createTextNode("Apellido ");
    label_apellido.appendChild(label_apellido_text);
    label_apellido.setAttribute("for", "apellido" + apellido);

    /* <input type="text" name="apellido" id="apellido"> */
    var input_apellido = document.createElement("input");
    input_apellido.setAttribute("type", "text");
    input_apellido.setAttribute("name", "apellido" + apellido);
    input_apellido.id = "apellido" + apellido;
    input_apellido.disabled = true;

    /* <div class="apellido">...</div> */
    div_apellido.appendChild(label_apellido);
    div_apellido.appendChild(input_apellido);


    /* 
    <div class="editar">
        <button><img src="img/lapiz.jpg" alt="!"></button>
    </div> */

    /* <div class="editar"> */
    var div_editar = document.createElement("div");
    div_editar.className += "editar";

    /* <button> */
    var button_editar = document.createElement("button");
    button_editar.addEventListener("click", editar, false);

    /* <img src="img/lapiz.jpg" alt="!"> */
    var img_editar = document.createElement("img");
    img_editar.setAttribute("src", "img/lapiz.jpg");
    img_editar.setAttribute("alt", "!");

    /* crear el div con los hijos */
    button_editar.appendChild(img_editar);
    div_editar.appendChild(button_editar);

    /*
    <div class="eliminar">
        <button><img src="img/x.jpg" alt="X"></button>
    </div> */

    /* <div class="eliminar"> */
    var div_eliminar = document.createElement("div");
    div_eliminar.className += "eliminar";

    /* <button> */
    var button_eliminar = document.createElement("button");
    button_eliminar.addEventListener("click", eliminar, false);

    /* <img src="img/x.jpg" alt="!"> */
    var img_eliminar = document.createElement("img");
    img_eliminar.setAttribute("src", "img/x.jpg");
    img_eliminar.setAttribute("alt", "!");


    button_eliminar.appendChild(img_eliminar);
    div_eliminar.appendChild(button_eliminar);

    /* añadir los div class anteriores */
    div_campo.appendChild(div_dni);
    div_campo.appendChild(div_nombre);
    div_campo.appendChild(div_apellido);
    div_campo.appendChild(div_editar);
    div_campo.appendChild(div_eliminar);
    document.getElementById("lista").appendChild(div_campo);

}

function eliminar() {
    

    var padre = this.parentNode;
    var abuelo = padre.parentNode;
    var tatarabuelo = abuelo.parentNode;

    tatarabuelo.removeChild(abuelo);

    /* var array = abuelo.getElementsByTagName("div"); */
    

    
}

function editar() {

    var padre = this.parentNode;
    var abuelo = padre.parentNode;

    var array = abuelo.getElementsByTagName("input");
    for(let i = 0; i < array.length; i++) {
        array[i].disabled = false;
    }

    this.className += "disabled";
    this.disabled = true;
}

document.addEventListener("DOMContentLoaded", cargar, false);