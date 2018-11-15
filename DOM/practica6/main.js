
var segundos = 1;
var timer;

var videoActivo = "video1";

/* variable para avanzar o retroceder el timepo del video*/
var tiempo = 10;

/*var para subir o bajar el sonido*/
var sonido = 0.2;

var video;




function cargar() {

    timer = setInterval(correrTiempo, 1000);
    document.getElementById("playPausa").addEventListener("click", playPauseVideo, false);
    document.getElementById("rebobinar").addEventListener("click", retrocederVideo, false);
    document.getElementById("avanzar").addEventListener("click", avanzarVideo, false);
    video = document.getElementById("video1");
    document.getElementById("volMas").addEventListener("click", masVol, false);
    document.getElementById("volMenos").addEventListener("click", menosVol, false);
    document.getElementById("reiniciar").addEventListener("click", reiniciarVideo, false);

}

function reiniciarVideo() {
    video.load();
}

function masVol() {
    video.volume += sonido;
}
function menosVol() {
    video.volume -= sonido;
}


function muteVideo() {
    if(video.muted == false){
        video.muted = true;
    }else{
        video.muted = false;
    }
}


function avanzarVideo() {
    video.currentTime += tiempo;   
}
function retrocederVideo() {
    video.currentTime -= tiempo;
}


function playPauseVideo() {
    
    var boton = document.getElementById("playPausa");


    if (boton.className != "play"){
        boton.className = "play";
        video.play();

    }else{
        boton.className = "pause";
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