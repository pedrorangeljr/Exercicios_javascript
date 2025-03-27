/* 
Faça um programa que leia um número inteiro positivo par N e imprima todos os números
pares de 0 até N em ordem crescente.
*/

const prompt = require('prompt-sync')();

let n = parseInt(prompt(""));

console.log("*************************************");

for (i = 0; i <= n; i++) {

    if(i % 2 == 0) {

        console.log(`${i}`);
    }
}