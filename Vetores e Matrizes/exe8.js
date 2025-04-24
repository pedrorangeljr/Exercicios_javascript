/*
Crie um programa que lê 6 valores inteiros e, em seguida, mostre na tela os valores lidos
na ordem inversa.
*/

const prompt = require('prompt-sync')();

let vetor = [];

for (i = 0; i < 6; i++) {

    let valor = parseInt(prompt(`Digite o valor ${i}: `));
    vetor.push(valor);
}

let inverso = [...vetor].reverse();

console.log(inverso.join(", "));