



function mensage() {
    
    var datos = location.search;

    var arrayNombre = datos.split("&");
    
    
    var nombre = arrayNombre[0].split("=")[1];
    var apellido = arrayNombre[1].split("=")[1];
    var correo = arrayNombre[2].split("=")[1];
    


    alert( "Hola " + nombre + " " + apellido + " se cual es tu correo " + correo );

}


document.addEventListener("DOMContentLoaded", mensage, false);