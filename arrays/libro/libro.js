export class Libro {

    constructor(_libro, _titulo, _autor, _pais, _isbn) {

        this.libro = _libro;
        this.titulo = _titulo;
        this.autor = _autor;
        this.pais = _pais;
        this.isbn = _isbn;

    }
 
    get libro() {
        return this.libro;
    }

    set titulo(newtitulo) {
        this.titulo = newtitulo;
    }

    get autor() {
        return this.autor;
    }

    set autor(newautor) {
        this.autor = newautor;
    }

    get pais() {
        return this.pais;
    }

    set pais(newpais) {
        this.pais = newpais;
    }

    get isbn() {
        return this.isbn;
    }

    set isbn(newisbn) {
        this.isbn = newisbn;
    }


}