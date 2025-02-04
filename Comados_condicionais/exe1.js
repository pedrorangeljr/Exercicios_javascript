// Faça um programa que receba dois números e mostre qual deles é o maior.

var prompt = require('prompt-sync')();

let numero = prompt("");
let numero2 = prompt("");

if(numero > numero2) {

    console.log(`O número maior é: ${numero}`);
}else {

    console.log(`O número maior é: ${numero2}`);
}