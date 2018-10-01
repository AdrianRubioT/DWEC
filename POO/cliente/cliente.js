export class cliente {

    constructor(_nombre, _direccion, _dni, _telefono) {

        this.nombre = _nombre;
        this.direccion = _direccion;
        this.dni = _dni;
        this.telefono = _telefono;
    }

    set nombre(newNombre) {
        this.nombre = newNombre;
    }

    get nombre() {
        return this.nombre;
    }

    set direccion(newdireccion) {
        this.direccion = newdireccion;
    }

    get direccion() {
        return this.direccion;
    }

    set dni(newdni) {
        this.dni = newdni;
    }

    get dni() {
        return this.dni;
    }

    set telefono(newtelefono) {
        this.telefono = newtelefono;
    }

    get telefono() {
        return this.telefono;
    }





}