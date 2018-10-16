
function crearTextarea() {
    var nuevoElemento = document.createElement("textarea");
    var texto = document.createTextNode("");
    nuevoElemento.appendChild(texto);

    document.getElementById("SD").appendChild(nuevoElemento);
}

function crearP() {
    var nuevoElemento = document.createElement("p");
    var texto = document.createTextNode("hola");
    nuevoElemento.appendChild(texto);

    document.getElementById("ID").appendChild(nuevoElemento);
}

function crearDiv() {
    var nuevoElemento = document.createElement("div");
    var texto = document.createTextNode("algo");
    nuevoElemento.appendChild(texto);

    document.getElementById("SI").appendChild(nuevoElemento);
}

function crearButton() {
    var nuevoElemento = document.createElement("button");
    var texto = document.createTextNode("No pulsar");
    nuevoElemento.appendChild(texto);

    document.getElementById("II").appendChild(nuevoElemento);
}