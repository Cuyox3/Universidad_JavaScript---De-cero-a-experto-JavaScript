let miFuncion = function() {
    console.log("Función anónima");
}

let miFuncionFlecha = (a, b) => a + b;
console.log(miFuncionFlecha(5, 7)); // No aplica el hoisting
//Puede ser const en lugar de let