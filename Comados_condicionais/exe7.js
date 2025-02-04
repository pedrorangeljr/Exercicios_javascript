/* Faça um programa que receba dois números e mostre o maior. Se por acaso, os dois
   números forem iguais, imprima a mensagem Números iguais.
*/

let prompt = require('prompt-sync')();
let n1 = prompt("");
let n2 = prompt("");

if (n1 > n2) {

   console.log(`O número maior é: ${n1}`);

} else if (n2 < n1) {

   console.log(`O número maior é: ${n2}`);

} else if (n1 === n2) {

   console.log("Os números são iguais");

}