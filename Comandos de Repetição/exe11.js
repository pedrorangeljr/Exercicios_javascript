/* 

    Faça um programa que leia um número inteiro positivo N e imprima todos os números
    naturais de 0 até N em ordem crescente.

*/

const prompt = require('prompt-sync')();

let N = parseInt(prompt(""));

for(i = 0; i <= N; i++) {

    console.log(`${i}`);
}