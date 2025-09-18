//Crie uma função chamada "calculadora" que recebe uma string como parâmetro contendo uma
//expressão matemática (ex: "2+3*4") e retorna o resultado dessa expressão.

const prompt = require('prompt-sync')();

let valor = prompt("Digite uma expressão:")
function calculadora(valor) {
   
    return eval(valor)
}

console.log(calculadora(valor)); 
