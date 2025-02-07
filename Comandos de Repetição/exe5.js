// Faça um programa que peça ao usuário para digitar 5 valores e some-os.

const prompt = require('prompt-sync')();
let soma = 0;

for(i = 1; i <=5; i++) {

    let numeros = parseInt(prompt(""));

    soma += numeros;

}
console.log(`A soma é: ${soma}`);