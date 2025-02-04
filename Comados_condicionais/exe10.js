/*

    Escreva um programa que leia um número inteiro maior do que zero e devolva, na tela, a
    soma de todos os seus algarismos. Por exemplo, ao número 251 corresponderá o valor
    8 (2 + 5 + 1). Se o número lido não for maior do que zero, o programa terminará com a
    mensagem “Número inválido”.

*/

const prompt = require('prompt-sync')();

function somaAlgarismos(num) {

    let soma = 0;
    while(num > 0) {

        soma += num % 10;
        num = Math.floor(num / 10);
    }

    return soma;
}

let numero = parseInt(prompt(""));

if(numero > 0) {

    let resultado = somaAlgarismos(numero);
    console.log(`A soma dos algarismos é: ${resultado}`);

}else {

    console.log("Número Inválido");
}