/*

Faça um programa que leia um número inteiro positivo n e calcule a soma dos n primeiros
números naturais.

*/

const prompt = require('prompt-sync')();

let n = parseInt(prompt(""));

let soma = 0

for(i = 1; i <= n; i++) {

    soma += i
}

console.log(`A soma dos ${n} primeiros números naturais é: ${soma}`);