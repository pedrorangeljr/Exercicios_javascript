/*

 Faça um programa que leia um número inteiro positivo N e imprima todos os números
 naturais de 0 até N em ordem decrescente.

*/

const prompt = require('prompt-sync')();

let N = parseInt(prompt(""));
console.log("**************************************")

for (i = N; i >= 0; i--) {

    console.log(`${i}`)
}