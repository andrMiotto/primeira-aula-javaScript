// 12 - Criar uma função que junte dois arrays e retorno o resultado como um novo array

const prompt = require('prompt-sync')();
require('prompt-sync');

 let numeros1 = [];
 let numeros2 = [];

while (true) {
    console.log("Array1")
    let entrada = prompt("Digite um número (ou 'sair' para parar): ");
    
    if (entrada.toLowerCase() === "sair") {
        break; 
    }

    let numero = Number(entrada);
    numeros1.push(numero);

}



while (true) {
    console.log("Array2")
    let entrada = prompt("Digite um número (ou 'sair' para parar): ");
    
    if (entrada.toLowerCase() === "sair") {
        break; 
    }

    let numero = Number(entrada);
    numeros2.push(numero);

}

console.log(numeros1.concat(numeros2))