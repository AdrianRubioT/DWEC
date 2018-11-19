
function cargar() {
    window.addEventListener("keydown", text, false);
}

function text(event) {
    console.log(event);
    console.log(event.key);
}

document.addEventListener("DOMContentLoaded", cargar, false);