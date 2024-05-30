let prompt = require('prompt-sync')();

let K = parseFloat(prompt(""));

let C = K - 273.15;

console.log(`A Temperatura em graus Celsius: ${C}`);