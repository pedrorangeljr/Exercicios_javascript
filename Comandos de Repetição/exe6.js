// Faça um programa que leia 5 inteiros e imprima sua média.

const prompt = require('prompt-sync')();
let soma = 0;

for (let i = 1; i <= 5; i++) {

    let numeros = parseFloat(prompt(""));
    soma += numeros;

}

let media = (soma / 5).toFixed(1);

console.log(`A media dos valores digitados: ${media}`);