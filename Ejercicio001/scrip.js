/* Ejercicio 1
Escribir un programa que en
 primera instancia nos pida el número de elementos de un array, y en
segunda cada uno de ellos (números enteros).
Al finalizar deberá decir cuál es el número más alto. */


var elemento = prompt("introduzca el numero de elementos que desea introducir");
var lista = new Array;

var mayor = 0;

for (let i = elemento; i > 0; i--) {
    var aniadir = prompt("Introduzca el numero que desee");
    lista.push(aniadir);

   if (aniadir >= mayor) {
       mayor = aniadir;
   }

}

document.write(elemento + "</br>");
document.write("El numero mas grande es:" + mayor);

