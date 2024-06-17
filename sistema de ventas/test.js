class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }   
    get precio() {
        return this._precio;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }

    toString() {//get y set solo recomiendan desde fuera de nuestro producto 
        return `
            Id: ${this._idProducto}, 
            Nombre: ${this._nombre},
            Precio: $ ${this._precio}`;
    }
}

let newProducto = new Producto('Camisa', 100);
let newProducto2 = new Producto('Pantalon', 200);
console.log(newProducto.toString());
console.log(newProducto2.toString());

class Orden{

    static contadorOrdenes = 0;
    
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrartorden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden}, Total: $ ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let ornden1 = new Orden();
let ornden2 = new Orden();
ornden1.agregarProducto(newProducto);
ornden2.agregarProducto(newProducto2);

ornden1.mostrartorden();
ornden2.mostrartorden();