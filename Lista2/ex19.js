// 19 - Crie um novo array chamado "idades" com algumas idades. Use o método every() para verificar se
//todos os elementos do array são maiores que 18. Imprima o resultado no console.

const prompt = require('prompt-sync')();
require('prompt-sync');

const idades = [18,20,10];

console.log(idades.every(idade => idade >= 18));

