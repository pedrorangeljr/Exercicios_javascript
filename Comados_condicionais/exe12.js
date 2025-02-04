/*
  
Faça um algoritmo que calcule a média ponderada das notas de 3 provas. A primeira e
a segunda prova têm peso 1 e a terceira tem peso 2. Ao final, mostrar a média do aluno
e indicar se o aluno foi aprovado ou reprovado. A nota para aprovação deve ser igual ou
superior a 60 pontos.

*/

const prompt = require('prompt-sync')();
let nota1 = parseInt(prompt("")) // numero float com duas casas decimais apos a vircula.
let nota2 = parseInt(prompt(""))
let nota3 = parseInt(prompt(""))

let mediaPonderada = ((nota1 * 1) + (nota2 * 1) + (nota3 * 2)) / (1+1+3);

if(mediaPonderada >= 60) {

    console.log("Aluno Aprovado");
    console.log(`Media: ${mediaPonderada}`);

} else {

    console.log("Aluno Reprovado");
    console.log(`Media a baixo de 60 pontos: ${mediaPonderada}`);

}