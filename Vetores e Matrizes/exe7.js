/*
Escreva um programa que leia 10 números inteiros e os armazene em um vetor. Imprima
o vetor, o maior elemento e a posição que ele se encontra.
*/

const prompt = require('prompt-sync')();
let vetor = [];

for (i = 0; i < 10; i++) {

    let valor = parseInt(prompt(`Digite o número ${i}: `));
    vetor.push(valor);
}

let maiorValor = Math.max(...vetor);

let maiorPosicao = vetor.indexOf(maiorValor);

console.log(vetor);
console.log(`O Maior elemento do vetor é: ${maiorValor}`);
console.log(`A posição que ele se encontra é: ${maiorPosicao}`);