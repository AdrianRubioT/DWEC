/* Ejercicio 3
Realizar una aplicación que pida 
un dni, 
una dirección de correo, 
un número de teléfono, 
una IP, y 
una URL válida (incluyendo el protocolo), 
    y que devuelva si tienen formato correcto.

Ten en cuenta que en el DNI, no solo tiene que comprobar si el formato es correcto, si no que también
tiene que comprobar si la letra concuerda con la serie numérica. */

/* ValCorreo();
valDNI();
pedirIP();
valTlf();
valUrl(); */


var password1;

function valPass(pass) {
    password1 = pass.value;
    var expresion_regular_nombre;

    expresion_regular_nombre = /^[A-Z][a-z]/;
    if (expresion_regular_nombre.test(pass.value) == true) {
        alert("coorecto");
    }else{
        alert("El password no es correcto");
    }
    
}

function checkPass(elemento) {
    alert(password1);
}


function valNombre(nombre) {
    
    var expresion_regular_nombre;

    expresion_regular_nombre = /^[A-Z][a-z]*/;
    if (expresion_regular_nombre.test(nombre) == true) {
        alert("coorecto");
    }else{
        alert("El nombre no es correcto");
    }

}

function valApellido(apellido) {
    
    var expresion_regular_apellido;

    expresion_regular_apellido = /^[A-Z][a-z]*\s[A-Z][a-z]*/;
    if (expresion_regular_apellido.test(apellido) == true) {
        alert("coorecto");
    }else{
        alert("El apellido no es correcto");
    }

}



function valDNI(dni) {

    /* var dni = prompt("Introduzca el DNI"); */

    /* https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/ */
    var expresion_regular_dni;

    expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    if (expresion_regular_dni.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
        } else {
            alert('Dni correcto');
        }
    } else {
        alert('Dni erroneo, formato no válido');
    }


}

function valCorreo(correo) {

    /* var correo = prompt("Introduzca un correo electronico"); */

    var expresion_regular_correo;
    expresion_regular_correo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

   if (expresion_regular_correo.test(correo)){
        alert("Es correcto");
    }else{
        alert("No es correcto");
    }

}

function valTlf(tlf) {

    /* var tlf = prompt("Introduzca un telefono"); */

    var expresion_regular_tlf = /^((\+?34([ \t|\-])?)?[9|6|7]((\d{1}([ \t|\-])?[0-9]{3})|(\d{2}([ \t|\-])?[0-9]{2}))([ \t|\-])?[0-9]{2}([ \t|\-])?[0-9]{2})$/;

   if (expresion_regular_tlf.test(tlf)){
        alert("Es correcto");
    }else{
        alert("No es correcto");
    }

}

function valIP(ip) {

    /* var ip = prompt("Introduzca una IP"); */

    //var expresion_regular_ip = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
    //var expresion_regular_ip = /^([0-9][.]|[0-9][0-9][0-9][.]){4}$/;
    var expresion_regular_ip = /^([0-9][.]|[0-9][0-9][.]|[0-9][0-9][0-9][.]){3}([0-9]|[0-9][0-9]|[0-9][0-9][0-9]){1}$/;
   if (expresion_regular_ip.test(ip)){
        alert("Es correcto");
    }else{
        alert("No es correcto");
    }
}

function valUrl(url) {
    

    /* var url = prompt("Introduzca una URL"); */

    var expresion_regular_URL = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;

   if (expresion_regular_URL.test(url)){
        alert("Es correcto");
    }else{
        alert("No es correcto");
    }

}
