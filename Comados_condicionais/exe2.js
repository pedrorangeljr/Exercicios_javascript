/*
    Leia um número fornecido pelo usuário. Se esse número for positivo, calcule a raiz
    quadrada do número. Se o número for negativo, mostre uma mensagem dizendo que o
    número é inválido.
*/

var prompt = require('prompt-sync')();

let numero = prompt("");

if (numero > 0) {

    console.log(`A raiz quadrada é: ${Math.sqrt(numero)}`);

} else {

    console.log(`Número Invalido`);
}