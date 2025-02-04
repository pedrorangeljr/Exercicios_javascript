/*  

As tarifas de certo parque de estacionamento são as seguintes:

• 1a e 2a hora - R$ 1,00 cada
• 3a e 4a hora - R$ 1,40 cada
• 5a hora e seguintes - R$ 2,00 cada

O número de horas a pagar é sempre inteiro e arredondado por excesso. Deste modo,
quem estacionar durante 61 minutos pagará por duas horas, que é o mesmo que pagaria
se tivesse permanecido 120 minutos. Os momentos de chegada ao parque e partida
deste são apresentados na forma de pares de inteiros, representando horas e minutos.
Por exemplo, o par 12 50 representará “dez para a uma da tarde”. Pretende-se criar um
programa que, lidos pelo teclado os momentos de chegada e de partida, escreva na tela
o preço cobrado pelo estacionamento. Admite-se que a chegada e a partida se dão com
intervalo não superior a 24 horas. Portanto, se uma dada hora de chegada for superior
à da partida, isso não é uma situação de erro, antes significará que a partida ocorreu no
dia seguinte ao da chegada.


*/

function calcularEstacionamento(chegadaHora, chegadaMinuto, partidaHora, partidaMinuto) {
    // Converter ambos os horários para minutos desde a meia-noite
    let chegadaTotalMinutos = chegadaHora * 60 + chegadaMinuto;
    let partidaTotalMinutos = partidaHora * 60 + partidaMinuto;

    // Caso a chegada seja após a meia-noite (dia seguinte)
    if (partidaTotalMinutos < chegadaTotalMinutos) {
        partidaTotalMinutos += 24 * 60; // Adicionar 24 horas (1440 minutos) para calcular a diferença corretamente
    }

    // Calcular a diferença de tempo em minutos
    let duracaoEmMinutos = partidaTotalMinutos - chegadaTotalMinutos;

    // Arredondar a duração para a próxima hora inteira
    let duracaoEmHoras = Math.ceil(duracaoEmMinutos / 60);

    // Calcular o valor a pagar com base nas tarifas
    let valor = 0;
    
    if (duracaoEmHoras <= 2) {
        valor = duracaoEmHoras * 1.00; // Primeira e segunda hora: R$ 1,00 cada
    } else if (duracaoEmHoras <= 4) {
        valor = 2 * 1.00 + (duracaoEmHoras - 2) * 1.40; // Terceira e quarta hora: R$ 1,40 cada
    } else {
        valor = 2 * 1.00 + 2 * 1.40 + (duracaoEmHoras - 4) * 2.00; // Quinta hora e seguintes: R$ 2,00 cada
    }

    // Exibir o valor final
    console.log(`Preço a pagar: R$ ${valor.toFixed(2)}`);
}

// Exemplo de uso do programa
calcularEstacionamento(12, 50, 15, 10); // Entrada: 12:50 até 14:10