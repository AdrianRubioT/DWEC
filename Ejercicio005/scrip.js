

/* Ejercicio 5
Escribir una función que devuelva el 
número de días que tiene un mes indicado. 
Le pasaremos como argumento el 
número de mes y el número de año.

document.write(obtenerDiasMes(1, 2012);
Resultado: 31

 */

function obtenerDiasMes(mes, anio) {

    var espar = mes % 2;


    switch (key) {

        case 0:
            /* caso par */
            
            if (mes == 2 ) {
                
                if (anio % 400 == 0 || anio % 4 == 0) {
                    alert("28 dias");
                } else {
                    alert("29 dias");
                }


            }


            break;

        default:
            break;
    }

}

