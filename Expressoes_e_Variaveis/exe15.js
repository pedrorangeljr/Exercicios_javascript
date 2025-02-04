let prompt = require('prompt-sync')();

let R = prompt("");

let G = R * 180/Math.PI;

console.log(`Em Graus: ${G}`);