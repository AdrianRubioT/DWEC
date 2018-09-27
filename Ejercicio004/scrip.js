
/* Ejercicio 4
Escribir una función a la que le pasemos un argumento 
y nos indique si este es un objeto Date o no.
 */


var fecha = "5sa/6/2019";

esDate(fecha);

function esDate(arg){


    if (Date.parse(arg)) {
        alert("Es una clase date");
    }else{
        alert("No es una clase date");
    }
    
}

