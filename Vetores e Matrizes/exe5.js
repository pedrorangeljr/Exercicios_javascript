/*
Leia um vetor de 10 posições. Contar e escrever quantos valores pares ele possui.
*/

const prompt = require('prompt-sync')();

let vetor = [];
let pares = 0;

for (i = 0; i < 10; i++) {

    let valor = parseInt(prompt(`Digite o valor para posição ${i}: `));
    vetor.push(valor);

    if(valor % 2 === 0) {

        pares++;
    }
}

console.log(`O vetor possui ${pares} valores pares.`);