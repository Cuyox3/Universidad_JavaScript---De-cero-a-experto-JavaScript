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

async function miFuncionConPromesa() {
    return 'Saludos con promesa y async';
}

miFuncionConPromesa().then( valor => console.log(valor));

// async/await

async function funcionConPromesaYAwait() {
    let miPromesa = new Promise( resolve => {
        resolve('Promesa con await');
    });

    console.log(await miPromesa);
}

funcionConPromesaYAwait();

async function funcionConPromesaYAwait() {
    let miPromesa = new Promise( resolve => {
        setTimeout( () => resolve('Promesa con await y timeout'), 3000);
    });

    console.log(await miPromesa);
    console.log('Fin de la funcion');
}

funcionConPromesaYAwait();