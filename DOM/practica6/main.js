
var segundos = 1;
var timer;
var videoActivo = "video1";

/* variable para avanzar o retroceder el timepo del */
var tiempo = 10;

var video = document.getElementsByClassName("reproductor")[0].children;


function cargar() {

    timer = setInterval(correrTiempo, 1000);
    document.getElementById("playPausa").addEventListener("click", playPauseVideo, false);
    document.getElementById("rebobinar").addEventListener("click", retrocederVideo, false);
    document.getElementById("avanzar").addEventListener("click", avanzarVideo, false);


}


function avanzarVideo() {


    
}

function retrocederVideo() {
    
}


function playPauseVideo() {
    
    var boton = document.getElementById("playPausa");


    if (boton.className != "play"){
        boton.className = "play";
        /* document.getElementById(videoActivo).play(); */
        video.play();

    }else{
        boton.className = "pause";
        /* document.getElementById(videoActivo).pause(); */
        video.pause();
    }
}




function ocultarAnuncio() {
    document.getElementById("anuncio").className = "oculto";

}
function correrTiempo() {
    if (segundos == 0) {
        
        clearInterval(timer);
        var aspa = document.getElementById("aspa");
        aspa.addEventListener("click", ocultarAnuncio, false);
        aspa.style.cursor = "pointer";

        segundos = 1;

    } else {

        document.getElementById("cuentaAtras").innerText=--segundos;
        /* console.log(segundos); */
    }
}





document.addEventListener("DOMContentLoaded", cargar, false);