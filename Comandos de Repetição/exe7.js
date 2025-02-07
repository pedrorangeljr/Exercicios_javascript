// Faça um programa que leia 5 inteiros positivos, ignorando não positivos, e imprima sua média.

const prompt = require('prompt-sync')();
let soma = 0;

for (i = 1; i <= 5; i++) {

    let numeros = parseFloat(prompt(""));

    if (i > 0) {

        soma += numeros;

    } else if (i < 0) {

        break;
    }
}

let media = (soma / 5).toFixed(1);

console.log(`A media dos numeros positivos: ${media}`);