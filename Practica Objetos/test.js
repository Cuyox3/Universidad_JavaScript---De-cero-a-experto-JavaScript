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


class Empleado extends Persona{
    static contadorEmpleado = 0;

        constructor(nombre, apellido, edad, salario) {
            super(nombre, apellido, edad);
            this._idEmpleado = ++Empleado.contadorEmpleado;
            this._salario = salario;
        }
    
        get idEmpleado() {
            return this._idEmpleado;
        }
        get salario() {
            return this._salario;
        }
        set salario(salario) {
            this._salario = salario;
        }
    
        toString() {
            return `
            Id: ${this._idEmpleado},
            ${super.toString()}
            Salario: ${this._salario}`; //El simbolo de dolar es para hacer referencia a las variables
        }
    }

    class Cliente extends Persona { 
        static contadorClientes = 0;
        constructor(nombre, apellido, edad, fechaRegistro) {
            super(nombre, apellido, edad);
            this._idCliente = ++Cliente.contadorClientes;
            this._fechaRegistro = fechaRegistro;
        }
        get idCliente() {
            return this._idCliente;
        }
        get fechaRegistro() {
            return this._fechaRegistro;
        }
        set fechaRegistro(fechaRegistro) {
            this._fechaRegistro = fechaRegistro;
        }
        toString() {
            return `
            Id: ${this._idCliente},
            ${super.toString()}
            Fecha de Registro: ${this._fechaRegistro}`;
        }
    }

let Persona1 = new Persona('Juan', 'Perez', 28);
console.log(Persona1.toString());
let Persona2 = new Persona('Carlos', 'Lara', 30); 
console.log(Persona2.toString());
let Empleado1 = new Empleado('Juan', 'Perez', '28', 5000);
console.log(Empleado1.toString());
let Empleado2 = new Empleado('Carlos', 'Lara', 30, 6000);   
console.log(Empleado2.toString());

let Cliente1 = new Cliente('Juan', 'Perez', 28, new Date());
console.log(Cliente1.toString());
let Cliente2 = new Cliente('Carlos', 'Lara', 30, new Date());
console.log(Cliente2.toString());