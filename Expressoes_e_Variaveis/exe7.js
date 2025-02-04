let prompt = require('prompt-sync')();

let F = parseFloat(prompt(""));

let C = 5.0 * (F - 32.0) / 9.0;

console.log(`A temperatura em graus Celsius: ${C}`);