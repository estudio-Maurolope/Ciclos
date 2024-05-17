//genera un numero aleatorio entre 1 y 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//funcion para pedir la entrada del usuario
function obtenerEntradaUsuario(mensaje) {
const readline = require('readline-sync');
return readline.question(mensaje);
}

//variable para almacenar la suposicion del usuario
let suposicion;
let intentos = 0;

//bucle para el juego
while(true){
suposicion = obtenerEntradaUsuario('Adivina un numero entre 1 y 100: ');
suposicion = parseInt(suposicion,10);
intentos++;
    if(isNaN(suposicion)){
        console.log('por favor, ingera un numero valido.');
    } else if (suposicion < 1 || suposicion > 100){
        console.log('ingresa un numero entre 1 a 100.')
    } else if (suposicion < numeroAleatorio) {
        console.log("Demasiado bajo. Intenta nuevamente.");
    } else if (suposicion > numeroAleatorio) {
        console.log("Demasiado alto. Intenta nuevamente.");
    } else {
        console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
        break;
    }
}