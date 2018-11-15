
var segundos = 1;
var timer;

var videoActivo = "video1";

/* variable para avanzar o retroceder el timepo del video*/
var tiempo = 10;



var video;




function cargar() {

    timer = setInterval(correrTiempo, 1000);
    document.getElementById("playPausa").addEventListener("click", playPauseVideo, false);
    document.getElementById("rebobinar").addEventListener("click", retrocederVideo, false);
    document.getElementById("avanzar").addEventListener("click", avanzarVideo, false);
    video = document.getElementById("video1");
    document.getElementById("silencio").addEventListener("click", muteVideo, false);

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