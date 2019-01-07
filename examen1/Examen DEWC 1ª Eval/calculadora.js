
/* var para controlar el display */
var display;

function cargar() {
    /* window.addEventListener("keydown", text, false); */

    /* cambiar los getElementById por el array de los hijos y limpiar el html */

    /* eventos de pulsar las teclas */
    document.getElementById("num0").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num1").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num2").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num3").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num4").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num5").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num6").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num7").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num8").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("num9").addEventListener("mousedown", pulsarTecla, false);

    document.getElementById("num0").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num1").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num2").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num3").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num4").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num5").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num6").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num7").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num8").addEventListener("mouseup", removeSombra, false);
    document.getElementById("num9").addEventListener("mouseup", removeSombra, false);

    /* tecvlas de operacion */
    document.getElementById("porcentage").addEventListener("mousedown", asignarOpearion, false);
    document.getElementById("porcentage").addEventListener("mouseup", removeSombra, false);

    document.getElementById("division").addEventListener("mousedown", asignarOpearion, false);
    document.getElementById("division").addEventListener("mouseup", removeSombra, false);

    document.getElementById("multiplicar").addEventListener("mousedown", asignarOpearion, false);
    document.getElementById("multiplicar").addEventListener("mouseup", removeSombra, false);

    document.getElementById("resta").addEventListener("mousedown", asignarOpearion, false);
    document.getElementById("resta").addEventListener("mouseup", removeSombra, false);

    document.getElementById("suma").addEventListener("mousedown", asignarOpearion, false);
    document.getElementById("suma").addEventListener("mouseup", removeSombra, false);

    document.getElementById("resultado").addEventListener("mousedown", resultado, false);
    document.getElementById("resultado").addEventListener("mouseup", removeSombra, false);

    document.getElementById("clear").addEventListener("mousedown", clear, false);
    document.getElementById("clear").addEventListener("mouseup", clear, false);


    document.getElementById("retroceso").addEventListener("mousedown", retroceso, false);
    document.getElementById("retroceso").addEventListener("mouseup", removeSombra, false);


    document.getElementById("punto").addEventListener("mousedown", pulsarTecla, false);
    document.getElementById("punto").addEventListener("mouseup", removeSombra, false);


    document.getElementById("parentesis").addEventListener("mousedown", addParentesis, false);
    document.getElementById("parentesis").addEventListener("mouseup", removeSombra, false);


    /* capturar las teclas que se pulsan */
    window.addEventListener("keypress", eventoTecaldo, false);

    /* sacamos el elemento a global */
    display = document.getElementById("display");
}



function eventoTecaldo(event) {
    console.log(event)
    var charCodePulsada = event.charCode;

    var event1 = new Event("mousedown");
    var event2 = new Event("mouseup");

    /* numeros */
    /* 0 */
    if (charCodePulsada == 48) {
        document.getElementById("num0").dispatchEvent(event1);
        document.getElementById("num0").dispatchEvent(event2);
    }
    /* 1 */
    if (charCodePulsada == 49) {
        document.getElementById("num1").dispatchEvent(event1);
        document.getElementById("num1").dispatchEvent(event2);
    }
    /* 2 */
    if (charCodePulsada == 50) {
        document.getElementById("num2").dispatchEvent(event1);
        document.getElementById("num2").dispatchEvent(event2);
    }
    /* 3 */
    if (charCodePulsada == 51) {
        document.getElementById("num3").dispatchEvent(event1);
        document.getElementById("num3").dispatchEvent(event2);
    }
    /* 4 */
    if (charCodePulsada == 52) {
        document.getElementById("num4").dispatchEvent(event1);
        document.getElementById("num4").dispatchEvent(event2);
    }
    /* 5 */
    if (charCodePulsada == 53) {
        document.getElementById("num5").dispatchEvent(event1);
        document.getElementById("num5").dispatchEvent(event2);
    }
    /* 6 */
    if (charCodePulsada == 54) {
        document.getElementById("num6").dispatchEvent(event1);
        document.getElementById("num6").dispatchEvent(event2);
    }
    /* 7 */
    if (charCodePulsada == 55) {
        document.getElementById("num7").dispatchEvent(event1);
        document.getElementById("num7").dispatchEvent(event2);
    }
    /* 8 */
    if (charCodePulsada == 56) {
        document.getElementById("num8").dispatchEvent(event1);
        document.getElementById("num8").dispatchEvent(event2);
    }
    /* 9 */
    if (charCodePulsada == 57) {
        document.getElementById("num9").dispatchEvent(event1);
        document.getElementById("num9").dispatchEvent(event2);
    }

    /* operaciones */
    /* + */
    if (charCodePulsada == 43) {
        document.getElementById("suma").dispatchEvent(event1);
        document.getElementById("suma").dispatchEvent(event2);
    }
    /* - */
    if (charCodePulsada == 45) {
        document.getElementById("resta").dispatchEvent(event1);
        document.getElementById("resta").dispatchEvent(event2);
    }
    /* * */
    if (charCodePulsada == 42) {
        document.getElementById("multiplicar").dispatchEvent(event1);
        document.getElementById("multiplicar").dispatchEvent(event2);
    }
    /* / */
    if (charCodePulsada == 47) {
        document.getElementById("division").dispatchEvent(event1);
        document.getElementById("division").dispatchEvent(event2);
    }
    
    /* porcentage */
    /* para activar pulsar sift + 5 */
    if (charCodePulsada == 37) {
        document.getElementById("porcentage").dispatchEvent(event1);
        document.getElementById("porcentage").dispatchEvent(event2);
    }

    /* c */
    /* clear */
    if (charCodePulsada == 99) {
        document.getElementById("clear").dispatchEvent(event1);
        document.getElementById("clear").dispatchEvent(event2);
    }


    /* los dos key event siguintes no tienen charcode usare la clave keyCode del event */
    /* retroceso */
    if (event.keyCode == 8) {
        document.getElementById("retroceso").dispatchEvent(event1);
        document.getElementById("retroceso").dispatchEvent(event2);
    }
    /* intro */
    if (event.keyCode == 13) {
        document.getElementById("resultado").dispatchEvent(event1);
        document.getElementById("resultado").dispatchEvent(event2);
    }

    

}


function addParentesis() {
    display.value = "(" + display.value + ")";
}


function retroceso() {

    if (display.value.length == 1) {
        display.value = 0;
    } else {
        display.value = display.value.substring(0, display.value.length - 1)
    }

}


function clear() {
    display.value = 0;
}



function resultado() {
    display.value = display.value.replace("%", "/100*");
    display.value = eval(display.value);
}


function asignarOpearion(event) {
    /* console.log(event.target.innerText); */

    if (event.target.innerText == "x") {
        display.value += "*";
    } else {
        display.value += event.target.innerText;
    }

}


function pulsarTecla(event) {
    addSombra(event);
    /* console.log(event.target.innerText); */
    aniadirNumDisplay(event.target.innerText);
}



function addSombra(event) {
    /* console.log(event.target.id); */
    /* console.log(event.target); */
    event.target.style = "box-shadow: inset 0 4px 6px rgba(0,0,0,.5)";
}
function removeSombra(event) {
    event.target.style = "";
}



function aniadirNumDisplay(numero) {

    if (display.value == 0) {
        display.value = numero;
    } else {
        display.value += numero;
    }
}




document.addEventListener("DOMContentLoaded", cargar, false);