/*
Faça um programa que leia um vetor de 8 posições e, em seguida, leia também dois va-
lores X e Y quaisquer correspondentes a duas posições no vetor. Ao final seu programa
deverá escrever a soma dos valores encontrados nas respectivas posições X e Y .
*/

const prompt = require('prompt-sync')();

let vetor = [];

for(i = 0; i < 8; i++) {

    let valor = parseInt(prompt(`Dogote o valor para posição ${i}: `));
    vetor.push(valor);
}

let x = parseInt(prompt("Digite o índice X (0 a 7): "));
let y = parseInt(prompt("Digite o índice Y (0 a 7): "));

// Verifica se os índices são válidos
if (x >= 0 && x < 8 && y >= 0 && y < 8) {
  let soma = vetor[x] + vetor[y];
  alert(`A soma dos valores nas posições ${x} e ${y} é: ${soma}`);
} else {
  alert("Índices inválidos. Por favor, insira valores entre 0 e 7.");
}