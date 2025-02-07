const prompt = require('prompt-sync')();
let km = parseInt(prompt(""));
let litros = parseInt(prompt(""));

let consumo = km / litros.toFixed(1);

if (consumo < 8) {

    console.log("Venda o Carro!");

} else if (consumo > 8 && consumo <= 11) {

    console.log("Econômico!");

} else if (consumo > 14) {

    console.log("Super Econônimco!");

}