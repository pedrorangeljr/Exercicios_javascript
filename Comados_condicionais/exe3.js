/*
     Leia um numero real. Se o numero for positivo imprima a raiz quadrada. Do contrario,
     imprima o numero ao quadrado.
*/

let prompt = require('prompt-sync')();
let numero = prompt("");

if(numero > 0) {

    console.log(`A raiz quadrada é ${Math.sqrt(numero)}`);

}else {

    console.log(`O número ao quadrado é: ${Math.pow(numero, 2)}`);
}