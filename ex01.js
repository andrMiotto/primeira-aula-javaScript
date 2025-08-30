//1 - Verificar se um número é positivo, negativo ou zero.

const prompt = require('prompt-sync')();
require('prompt-sync')



let numero1 = prompt('Digite um numero: ');

(numero1 > 0) && console.log(`Numero ${numero1} é positivo`) || (numero1 < 0) && console.log(`Numero ${numero1} é negativo`) || (numero1 == 0) && console.log(`o numero ${numero1} é nulo`);
