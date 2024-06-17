class Dispositivo_entrada {
    constructor(tipo, marca, modelo) {
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
    }
    get getTipo() {
        return this.tipo;
    }
    set setTipo(tipo) {
        this.tipo = tipo;
    }
    get getMarca() {
        return this.marca;
    }
    set setMarca(marca) {
        this.marca = marca;
    }
    get getModelo() {
        return this.modelo;
    }
    set setModelo(modelo) {
        this.modelo = modelo;
    }
    mostrar() {
        console.log(`Tipo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
}

class Raton extends Dispositivo_entrada {
    static contadorRatones = 0;
    constructor(tipo, marca, modelo) {
        super(tipo, marca, modelo);
        this._idRaton = ++Raton.contadorRatones;
    }
    get getIdRaton() {
        return this._idRaton;
    }
    toString() {
        return `Id: ${this._idRaton}, Tipo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}
class Teclado {
    static contadorTeclados = 0;
    constructor(tipo, marca, modelo) {
        this._idTeclado = ++Teclado.contadorTeclados;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
    }
    get getIdTeclado() {
        return this._idTeclado;
    }
    toString() {
        return `Id: ${this._idTeclado}, Tipo: ${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamaño = tamaño;
    }
    get getIdMonitor() {
        return this._idMonitor;
    }
    set setMarca(marca) {
        this.marca = marca;
    }
    get getMarca() {
        return this.marca;
    }
    set setTamaño(tamaño) {
        this.tamaño = tamaño;
    }
    get getTamaño() {
        return this.tamaño;
    }
    toString() {
        return `Id: ${this._idMonitor}, Marca: ${this.marca}, Tamaño: ${this.tamaño}`;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    get getIdComputadora() {
        return this._idComputadora;
    }
    set setMonitor(monitor) {
        this.monitor = monitor;
    }
    get getMonitor() {
        return this.monitor;
    }
    set setTeclado(teclado) {
        this.teclado = teclado;
    }
    get getTeclado() {
        return this.teclado;
    }
    set setRaton(raton) {
        this.raton = raton;
    }
    get getRaton() {
        return this.raton;
    }


    toString() {
        return `Id: ${this._idComputadora}, Nombre: ${this.nombre}, Monitor: ${this.monitor}, Teclado: ${this.teclado}, Raton: ${this.raton}`;
    }
}
class Orden{    
    static contadorOrdenes = 0;
    constructor (Computadora, Monitor, Teclado, Raton){
        this.idOrden = ++Orden.idOrden;
        this.productos = [];
        this.Computadora = Computadora;
        this.Monitor = Monitor;
        this.Teclado = Teclado;
        this.Raton = Raton;
    }
    
    set setComputadora(Computadora){
        this.Computadora = Computadora;
    }
    get getComputadora(){
        return this.Computadora;
    }
    set setMonitor(Monitor){
        this.Monitor = Monitor;
    }
    get getMonitor(){
        return this.Monitor;
    }
    set setTeclado(Teclado){
        this.Teclado = Teclado;
    }
    get getTeclado(){
        return this.Teclado;
    }
    set setRaton(Raton){
        this.Raton = Raton;
    }
    get getRaton(){
        return this.Raton;
    }


    agregarComputadora(Computadora){
        this.productos.push(Computadora);
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this.productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this.idOrden}, Productos: ${productosOrden}`);
    }
    toString(){
        let productosOrden = '';
        for(let producto of this.productos){
            productosOrden += producto.toString() + ' ';
        }
        return `Orden: ${this.idOrden}, Productos: ${productosOrden}`;
    }

}

let raton1 = new Raton('USB', 'Logitech', 'G203');
let teclado1 = new Teclado('USB', 'Logitech', 'G213');
let monitor1 = new Monitor('Samsung', 15);
let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
let raton2 = new Raton('USB', 'Logitech', 'G203');
let teclado2 = new Teclado('USB', 'Logitech', 'G213');
let monitor2 = new Monitor('Samsung', 15);
let computadora2 = new Computadora('HP', monitor2, teclado2, raton2);
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
console.log(orden1.toString());
