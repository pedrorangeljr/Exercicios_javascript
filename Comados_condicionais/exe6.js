/**
 *   Escreva um programa que, dados dois numeros inteiros, mostre na tela o maior deles,
     assim como a diferenca existente entre ambos.
 * 
 */

let prompt = require('prompt-sync')();
let n1 = prompt("");
let n2 = prompt("");

if(n1 < n2) {

    console.log(`O número maior é: ${n1}`);
    console.log(`A diferença entre eles é: ${n1 - n2}`);

}else {

    console.log(`O numero maior é: ${n2}`);
    console.log(`A difrerença entre eles é: ${n2 - n1}`);
}