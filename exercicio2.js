const frase = prompt("Digite uma frase")

let maiuscula = frase.toLocaleUpperCase()

console.log(maiuscula)

let trocandoletra = maiuscula.replaceAll("O", "I").replaceAll("o", "i")

console.log(trocandoletra)

console.log(frase.length)


console.log(frase.includes("ola"))