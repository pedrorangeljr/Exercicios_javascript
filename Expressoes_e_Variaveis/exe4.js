let prompt = require('prompt-sync')();

let numero = parseFloat(prompt(""));

let quadradoNumero = Math.pow(numero, 2);

console.log(`O qudrado número: ${quadradoNumero}`);
