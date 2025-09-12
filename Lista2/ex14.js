// 14 - Escreva uma função em JavaScript que conte quantas vezes um caractere aparece em uma string.
//Tanto o caractere quanto a string devem ser informadas.

const prompt = require('prompt-sync')();
require('prompt-sync');


function contarCaracter(string, caracter) {
  return string.split(caracter).length - 1;
}

let palavra =String(prompt("Digite uma palavra qualquer: "))
const caractere = String(prompt(`Digite o caracter para saber quantas vezes ele aparece na palavra ${palavra}: `));
console.log(`O caractere "${caractere}" aparece ${contarCaracter(palavra, caractere)} vezes.`);
