let miFuncion = function() {
    console.log("Función anónima");
}

let miFuncionFlecha = (a, b) => a + b;
console.log(miFuncionFlecha(5, 7)); // No aplica el hoisting
//Puede ser const en lugar de let

const FuncionFlecha = () =>  console.log("Función flecha");
FuncionFlecha();

const Saludar = () => {
    console.log("Hola");
    console.log("Mundo");
}

console.log(Saludar())

const regresaobjeto = () => ({nombre: "Juan", apellido: "Perez"});
console.log(regresaobjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("Hola mundo");
