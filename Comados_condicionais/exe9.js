/* 

    Leia o salário de um trabalhador e o valor da prestação de um empréstimo. Se a
    prestação for maior que 20% do salário imprima: Empréstimo nao concedido, caso
    contrário imprima: Empréstimo concedido.

*/

let prompt = require('prompt-sync')();
let salario = parseFloat(prompt("")).toFixed(2);
let valorPrestacao = parseFloat(prompt("")).toFixed(2);

calculo = salario * 0.2; // primeiro tenho descobir quanto é 20% do salario.

if(valorPrestacao > calculo) {

    console.log("Emprestio não concedido");
    console.log(`20% do salario: ${calculo}`);
    console.log(`perstação acima  de 20% do salario: ${valorPrestacao}`);

}else {

    console.log("Emprestimo concedido");
}
