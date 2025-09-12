const prompt = require('prompt-sync')();
require('prompt-sync');

/*18 - Crie um novo array chamado "numeros" com alguns números. Imprima o array no console.
Use o método join() para transformar o array "numeros" em uma string separada por vírgulas. Imprima
a string resultante no console.*/
const numeros = [1,2,3,4,5];


console.log(numeros);


console.log(numeros.join("-"));

/*Use o método reverse() para inverter a ordem dos elementos do array "numeros". Imprima o array
atualizado no console.*/
numeros.reverse();


console.log(numeros);

/*Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
array "numeros". Imprima o novo array no console.*/ 
console.log(numeros.slice(0,2));


const nomes = ["andré","c","b","d"];

nomes.sort();

console.log(nomes)

/*Use o método filter() para criar um novo array que contenha apenas os números pares do array
"numeros". Imprima o novo array no console.*/ 

 
console.log(numeros.filter(num => num % 2 === 0));






/*Use o método map() para criar um novo array que contenha o quadrado de cada elemento do array
"numeros". Imprima o novo array no console.*/ 

console.log(numeros.map(num => num * num));


/*Use o método reduce() para calcular a soma de todos os elementos do array "numeros". Imprima o
resultado no console.*/

console.log(numeros.reduce((acumulador, num) => acumulador + num, 0));


/*Use o método forEach() para imprimir cada elemento do array "nomes" no console. */

nomes.forEach(nome => console.log(nome));
