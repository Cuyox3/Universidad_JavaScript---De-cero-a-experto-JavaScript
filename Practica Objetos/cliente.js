class Cliente extends Persona { 
    static contadorClientes = 0;
    constructor(fechaRegistro) {
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