"use strict";

try {
    x=10;
    throw new Error("Error en el código"); // Lanza un error
}
catch (error) { // Captura el error
    console.log("Error: " + error.message);
}
finally {
    console.log("Finalmente se ejecuta el bloque de código");
}
console.log("Continuamos..."); // Continua con la ejecución del programa