// 10 - Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba talarray.
//Modifique os elementos do array de modo a a sequência de números ficar do contrário.


const prompt = require('prompt-sync')();
require('prompt-sync');


let numero1 = Number(prompt("Digite o primeiro numero: "));
let numero2 = Number(prompt("Digite o segundo numero: "));
let numero3 = Number(prompt("Digite o terceiro numero: "));


const numeros = [numero1, numero2, numero3];


console.log(numeros);

console.log("Array invertido: "+ numeros.reverse());


