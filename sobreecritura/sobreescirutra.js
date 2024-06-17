class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    obtenerDetalles() {
        return `Empleado: nombre: ${this.nombre}, salario: ${this.salario}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this.departamento}`;
    }

}

let gerente1 = new Gerente('Juan', 3000, 'Sistemas');
console.log(gerente1.obtenerDetalles());
let Empleado1 = new Empleado('Karla', 1000);
// Polimorfismo 

function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    //Instance of  no responde a la jerarquia de clases inferiores
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo gerente');
        console.log(tipo.departamento);
    }else if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo empleado');
    }
}

imprimir(gerente1);
imprimir(Empleado1);