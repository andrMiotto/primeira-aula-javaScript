//3 - Mostrar os múltiplos de 3 entre 1 e 30.
const prompt = require('prompt-sync')();
require('prompt-sync')

for (let index = 3; index <= 30; index += 3) {
    console.log(index)
}


//4 - Calcular o fatorial de um número.

let numeroFatorial = Number(prompt('Digite um numero para saber seu fatorial'));

for(numeroFatorial; numeroFatorial > 1; numeroFatorial %= numeroFatorial){
    console.log(numeroFatorial)
}