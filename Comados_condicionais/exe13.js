/*

A nota final de um estudante é calculada a partir de três notas atribuı́das entre o intervalo
de 0 até 10, respectivamente, a um trabalho de laboratório, a uma avaliação semestral
e a um exame final. A média das três notas mencionadas anteriormente obedece aos
pesos: Trabalho de Laboratório: 2; Avaliação Semestral: 3; Exame Final: 5. De acordo
com o resultado, mostre na tela se o aluno está reprovado (média entre 0 e 2,9), de
recuperação (entre 3 e 4,9) ou se foi aprovado. Faça todas as verificações necessárias.

*/

const prompt = require('prompt-sync')();
let nota1 = parseFloat(prompt("")).toFixed(1);
let nota2 = parseFloat(prompt("")).toFixed(1);
let nota3 = parseFloat(prompt("")).toFixed(1);

let mediaPonderada = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / (2 + 3 + 5).toFixed(1);

if (mediaPonderada > 0 && mediaPonderada <= 2.9) {

    console.log("Aluno Reprovado");
    console.log(`Media: ${mediaPonderada}`);

} else if (mediaPonderada > 3 && mediaPonderada <= 4.9) {

    console.log("Aluno de Recuperação");
    console.log(`Media: ${mediaPonderada}`);

} else {

    console.log("Aluno Aprovado");
    console.log(`media: ${mediaPonderada}`);

}