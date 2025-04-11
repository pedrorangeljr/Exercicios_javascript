/*
  Crie um programa que lê 6 valores inteiros e, em seguida, mostre na tela os valores lidos.
*/

const prompt = require('prompt-sync')();

vetor = [];

for (i = 0; i < 6; i++) {

    let numero = prompt("");
    vetor += numero;
}

console.log("----------------------------------");

for(j = 0; j < vetor.length; j++) {

    console.log(`${vetor[j]}`);
}