
function cargar() {

    document.getElementById("anuncio").addEventListener("click", anuncio, false);
    

}

function cerrarAnuncio() {

    document.getElementById("anuncio").className = oculto;

}

function anuncio() {
    alert("anuncio");
    var segundos = 10;
    var timer = setInterval(correrTiempo(), 1000);

    function setTiempo() {
        segundos = 10;
        document.getElementById("cuentaAtras").removeEventListener("click", cerrarAnuncio, false);
    }

    function correrTiempo() {

        if (segundos == 0) {

            clearInterval(timer);
            
            document.getElementById("cuentaAtras").addEventListener("click", cerrarAnuncio, false);

            actualizarTiempo()
        }
    }

    function actualizarTiempo() {

    alert("hola mundo");
        document.getElementById("cuentaAtras").Value=--segundos;
    }

    setTiempo();
    correrTiempo();

}

document.addEventListener("DOMContentLoaded", cargar, false);