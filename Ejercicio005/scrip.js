

/* Ejercicio 5
Escribir una función que devuelva el 
número de días que tiene un mes indicado. 
Le pasaremos como argumento el 
número de mes y el número de año.

document.write(obtenerDiasMes(1, 2012);
Resultado: 31

 */

var mes = 2;
var anio = 2100;

alert(obtenerDiasMes(mes, anio));

function obtenerDiasMes(mes, anio) {
    return new Date(anio, mes, 0).getDate();
}

