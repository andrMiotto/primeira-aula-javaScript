// 6 - Desenvolva um algoritmo que solicite salário e prestação. Se a prestação for maior que 20% do salário, imprimir: Empréstimo não pode ser concedido.


const prompt = require('prompt-sync')();
require('prompt-sync');


let salario = Number(prompt("Digite o valor do seu salario: "));
let prestacao = Number(prompt("Digite o valor da prestação: "));



if(prestacao > salario*0.20){
console.log(`Empréstimo não pode ser concedido.`)
}else{
    console.log("Empréstimo pode ser concedido.")
}










