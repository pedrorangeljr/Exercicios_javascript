/* 
  
 Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.

*/
function somaNumerosPares() {
    let soma = 0;
    let num = 2;  // O primeiro número par é 2

    // Loop para somar os 50 primeiros números pares
    for (let i = 1; i <= 50; i++) {
        soma += num;  // Adiciona o número par à soma
        num += 2;     // Avança para o próximo número par
    }

    // Exibe o resultado
    console.log("A soma dos 50 primeiros números pares é: " + soma);
}

// Chama a função para calcular e mostrar a soma
somaNumerosPares();
