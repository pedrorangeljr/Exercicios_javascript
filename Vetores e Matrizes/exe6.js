/*
Faça um programa que receba do usuário um vetor com 10 posições. Em seguida deverá
ser impresso o maior e o menor elemento do vetor.
*/

const prompt = require('prompt-sync')();

let vetor = [];

for (i = 0; i < 10; i++) {

    let valor = parseInt(prompt(`Digite o número ${i}: `));
    vetor.push(valor);
}

let max = Math.max(...vetor);
let min = Math.min(...vetor);

console.log(`O maior valor no vetor é: ${max}`);
console.log(`O menor valor do vetor é: ${min}`);