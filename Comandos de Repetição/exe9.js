/*
   
  Faça um programa que leia um número inteiro N e depois imprima os N primeiros
  números naturais ı́mpares.

*/
const prompt = require('prompt-sync')();

function imprimirImpares(N) {

    let count = 0;
    let num = 1;

    while (count < N) {

        console.log(num);
        num += 2;
        count++;
    }

}

let N = parseInt(prompt("Digite um numero inteiro N: "));
imprimirImpares(N);