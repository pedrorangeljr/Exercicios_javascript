let prompt = require('prompt-sync')();

let C = parseFloat(prompt(""));

let F = C * (9.0/5.0) + 32.0;

console.log(`A temperatura em graus Fahrenheit: ${F}`);