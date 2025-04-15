/*

Ler um conjunto de números reais, armazenando-o em vetor e calcular o quadrado das
componentes deste vetor, armazenando o resultado em outro vetor. Os conjuntos têm
5 elementos cada. Imprimir todos os conjuntos.

*/

const prompt = require('prompt-sync')();

vetor = [];

for (i = 0; i < 5; i++) {

    let numero = prompt("");
    vetor += numero;
    
}

vetor2 = [vetor];

console.log(`${vetor2}`);