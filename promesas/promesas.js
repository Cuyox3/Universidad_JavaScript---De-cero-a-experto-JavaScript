let mipromesa  = new Promise((resolve, reject) => {
    let expresion = 0;
    if(expresion) {
        resolve('¡Éxito!');
    } else {
        reject('¡Fallo!');
    }
});

mipromesa.then( valor => console.log(valor), error => console.log(error));
mipromesa
.then( valor => console.log(valor))
.catch( error => console.log(error));

// Promesas 

let promesa = new Promise( (resolve) => {
    setTimeout( () => resolve (
        console.log("Promesa terminada"), 
        resolve(), 
        1500));
});

promesa.then( valor => console.log(valor));

// async indica que una funcion regresa una promesa 