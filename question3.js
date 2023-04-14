const faturamentoMensal = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

function calcularMenorValor(){
    let menorValor = faturamentoMensal[0].valor

    for (let i = 1; i < faturamentoMensal.length; i++) {
        if ((faturamentoMensal[i].valor < menorValor) && faturamentoMensal[i].valor !== 0) {
            menorValor = faturamentoMensal[i].valor
        }
    }
    return menorValor
}

function calcularMaiorValor() {
    let maiorValor = faturamentoMensal[0].valor

    for (let i = 1; i < faturamentoMensal.length; i++) {
        if (faturamentoMensal[i].valor > maiorValor) {
            maiorValor = faturamentoMensal[i].valor
        }
    }
    return maiorValor
}

function calcularMedia() {
    let diasNaoUteis = 0, diasUteis, valorTotal = 0, media

    for (let i = 0; i < faturamentoMensal.length; i++) {
        if (faturamentoMensal[i].valor === 0.0) {
            diasNaoUteis++
        }
        valorTotal+=faturamentoMensal[i].valor
    }

    diasUteis = faturamentoMensal.length - diasNaoUteis
    media = valorTotal / diasUteis
    return media
}

function numeroDeDiasSuperioresAMedia() {
    let numDias = 0

    for (let i = 0; i < faturamentoMensal.length; i++) {
        if (faturamentoMensal[i].valor > calcularMedia()) {
            numDias++
        }
    }

    return numDias
}

console.log(calcularMenorValor()) // item 1
console.log(calcularMaiorValor()) // item 2
console.log(numeroDeDiasSuperioresAMedia()) // item 3