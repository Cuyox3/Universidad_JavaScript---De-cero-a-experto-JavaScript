//Saludo asincrono
function   saludoAsincrono() {
    console.log('Hola Mundo');
}
setTimeout(saludoAsincrono, 2000); // 2000 milisegundos = 2 segundos
setTimeout(() => console.log('Hola Mundo'), 2000); // 2000 milisegundos = 2 segundos
setTimeout(function() {
    console.log('Hola Mundo');
}, 2000); // 2000 milisegundos = 2 segundos