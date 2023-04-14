function verificarFibonacci(number) {
    let num1 = 0, num2 = 1
    let fib = []
    fib.push(num1, num2)

    while(num2 <= number) {
        let aux = num1 + num2
        fib.push(aux)
        num1 = num2
        num2 = aux
    }

    if (fib.includes(number)){
        return `${number} -> Pertence`
    } else {
        return `${number} -> Não pertence`
    }
}

console.log(verificarFibonacci(9)) // exemplo que retorna 'Não pertence'
console.log(verificarFibonacci(13)) // exemplo que retorna 'Pertence'