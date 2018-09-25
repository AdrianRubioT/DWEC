

/* 
Ejercicio 6
Escribir una función en Javascript que a partir de una fecha, nos devuelva el nombre del mes en
castellano.
Document.write(nombreMes(“10/11/2009”);
Noviembre

 */

//var fecha = "02/05/2018";
var fecha = "3/5/2018";
//var fecha = "2018/3/0";

alert(obtenerMes(fecha));

function obtenerMes(fecha) {
    //var fecha = new Date(fecha);
    var mes = new Date(fecha).getMonth();
    var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    return meses[mes];
}

