const inverterString = (string) => {
    let stringInvertida = []
    for (let i = string.length; i >= 0; i--) {
        stringInvertida.push(string[i])
    }
    return stringInvertida.join("")
}

console.log(inverterString("Teste String Invertida"))