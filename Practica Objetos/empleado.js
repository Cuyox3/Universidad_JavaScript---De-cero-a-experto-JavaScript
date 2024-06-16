class Empleado extends Persona{
static contadorEmpleado = 0;
    constructor(salario) {
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