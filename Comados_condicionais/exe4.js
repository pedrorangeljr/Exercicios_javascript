/**
 * Faça um programa que leia um numero e, caso ele seja positivo, calcule e mostre:
   • O numero digitado ao quadrado
   • A raiz quadrada do numero digitado
 * 
 */

let prompt = require('prompt-sync')();
let numero = prompt("");

if(numero > 0) {

    console.log(`O número ao quadrado: ${Math.pow(numero,2)}`);
    console.log(`A raiz quadrada é: ${Math.sqrt(numero, 2)}`);

}else {

    console.log("Número Invalido");
}