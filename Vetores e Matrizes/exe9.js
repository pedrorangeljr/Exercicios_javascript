/*
Crie um programa que lê 6 valores inteiros pares e, em seguida, mostre na tela os valores
lidos na ordem inversa.
*/

const prompt = require('prompt-sync')();
let vetor = [];

for (i = 0; i < 6; i++) {

    let valor = parseInt(prompt(`Digite o valor ${i}: `));
    vetor.push(valor);

}

//let inverso = [...vetor].reverse()

const numerosPares = vetor.filter(vetor => vetor % 2 === 0);
console.log(`Os valores pares são: ${numerosPares.join(", ")}`);

let inverso = [...numerosPares].reverse();
console.log(`O valores na ordem inversa: ${inverso}`);