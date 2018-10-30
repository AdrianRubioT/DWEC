



function mensage() {
    
    location.search = "nombre";

    alert(location.search);



    nombre = url.search("nombre");
    apellido = url.search("apellido");
    correo = url.search("correo");

    alert( "Hola " + nombre + " " + apellido + " se cual es tu correo " + correo );

}


document.addEventListener("DOMContentLoaded", mensage, false);