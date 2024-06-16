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
    