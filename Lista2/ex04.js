// 4 - Desenvolva um algoritmo que leia um número e se for maior que 20 imprima ametade desse número.


const prompt = require('prompt-sync')();
require('prompt-sync');


let numero = Number(prompt("Digite um numero: "));

if(numero > 20){
    console.log(numero/2);
}else{
    console.log(`${numero} nao é maior que 20`)
}