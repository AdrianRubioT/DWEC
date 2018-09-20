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


function pedirDNI() {

    var dni = prompt("Introduzca el DNI");

    /* https://donnierock.com/2011/11/05/validar-un-dni-con-javascript/ */
    var expresion_regular_dni

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

function pedirCorreo() {

}

function pedirTlf() {

}

function pedirip() {

}

function pedirURL() {

}
