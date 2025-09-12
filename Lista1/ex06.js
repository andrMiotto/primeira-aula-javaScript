//6 - Converter uma temperatura em Celsius para Fahrenheit.


const prompt = require('prompt-sync')();
require('prompt-sync');


let temperatura = Number(prompt("Digite uma temperatura em Celsius para converter para Fahrenheit: "));

function conversao(n){

    let fahrenheit = (n*1.8)+ 32;
    return `A temperatura em Fahrenheit é: ${fahrenheit}`

}

console.log(conversao(temperatura))