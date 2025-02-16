/*
     Escreva um programa que leia 10 números e escreva o menor valor lido e o maior valor
     lido.
*/

const prompt = require('prompt-sync')();

function encontarMaiorMenor() {

    let maior = -Infinity;
    let menor = Infinity;

    for (i = 1; i <= 5; i++) {

        let numero = parseInt(prompt(""));

        if (numero > maior) {

            maior = numero;

        } else if (numero < menor) {

            menor = numero;
        }
    }

    console.log(`O numero maior é: ${maior}`);
    console.log(`O numero menor é: ${menor}`);
}

encontarMaiorMenor();
