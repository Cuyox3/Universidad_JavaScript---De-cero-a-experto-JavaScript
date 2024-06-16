class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._edad = edad;
        this._apellido = apellido;
    }

    get idPersona() {
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get apellido() {
        return this._apellido;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set edad(edad) {
        this._edad = edad;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }

    toString() { return `
        Id: ${this._idPersona},
        Nombre: ${this._nombre},
        Apellido: ${this._apellido}, 
        Edad: ${this._edad}`; // Los acentos graves son para hacer saltos de línea
    }
}

