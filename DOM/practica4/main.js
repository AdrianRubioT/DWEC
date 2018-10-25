
document.addEventListener("DOMContentLoaded", cargar, false);


function cargar() {
    document.getElementById("btnAniadir").addEventListener("click", aniadirCampo, false);
}

function aniadirCampo() {

/*     alert("hola");  */
/*     var nuevoElemento = document.createElement("p");
    var texto = document.createTextNode("hola caracola");
    nuevoElemento.appendChild(texto);

    document.getElementsBytagName("div")[0].appendChild(nuevoElemento);
 */

    var div_campo = document.createElement("div");
    div_campo.className += "campo";


    var label_dni = document.createElement("label");
    var label_dni_text = document.createTextNode("DNI");
    label_dni.appendChild(label_dni_text);

    div_campo.appendChild(label_dni);

    document.getElementById("lista").appendChild(div_campo);


}


/* 
<div class="campo">

    <div class="DNI">
        <label for="">DNI</label>
        <input type="text" name="" id="">
    </div>

    <div class="nombre">
        <label for="">Nombre</label>
        <input type="text" name="" id="">
    </div>

    <div class="apellido">
        <label for="">Apellido</label>
        <input type="text" name="" id="">
    </div>

    <div class="eliminar">
        <button><img src="img/lapiz.jpg" alt="!"></button>
    </div>

    <div class="editar">
        <button><img src="img/x.jpg" alt="X"></button>
    </div>

</div>
 */