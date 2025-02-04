/* 
    Ler um número inteiro. Se o número lido for negativo, escreva a mensagem “Número
    inválido”. Se o número for positivo, calcular o logaritmo deste numero.
*/

const prompt = require('prompt-sync')();
let numero = parseInt(prompt(""));

if(numero > 0) {

    console.log(`O logaritimo do número: ${Math.log(numero).toFixed(2)}`);

}else {

    console.log("Número inválido");
}