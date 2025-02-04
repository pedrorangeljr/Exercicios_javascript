/**
 *   Faca um programa que receba um numero inteiro e verifique se este numero e par ou
     ımpar.
 */

let prompt = require('prompt-sync')();
let numero = prompt("");

if(numero % 2 === 0) {

    console.log("Número par");

}else {

    console.log("Número Impar");
}