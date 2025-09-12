/*22 - Crie um array chamado "frutas" com as frutas: maçã, banana e laranja. Imprima o array no
console.
*/


const frutas = ["abacate", "abacaxi", "chico"];

console.log(frutas)

/*
    Acesse o segundo elemento do array "frutas" e imprima no console.
*/
console.log(frutas[1]);

/*
Adicione a fruta "morango" ao final do array "frutas". Imprima o array atualizado no console.
*/
frutas.push("morango")
console.log(frutas)

/*
Remova o primeiro elemento do array "frutas". Imprima o array atualizado no console.
*/

frutas.shift();
console.log(frutas)


/*
Crie um novo array chamado "numeros" com alguns números. Use o método push() para adicionar um
novo número ao final do array. Imprima o array atualizado no console.
*/
const numeros = [18,20,10];

numeros.push(2);
console.log(numeros)

/*
Use o método pop() para remover o último elemento do array "numeros". Imprima o array atualizado no
console.
*/
numeros.pop();
console.log(numeros)

/*
Use o método unshift() para adicionar um novo número no início do array "numeros". Imprima o array
atualizado no console.
*/
numeros.unshift(3);
console.log(numeros)

/*
Use o método shift() para remover o primeiro elemento do array "numeros". Imprima o array atualizado
no console.*/

numeros.shift();
console.log(numeros)

/*
Crie um novo array chamado "frutas2" com as frutas: manga, abacaxi e melancia. Use o método
concat() para unir os arrays "frutas" e "frutas2" em um único array chamado "todasFrutas". Imprima o
array "todasFrutas" no console.*/


const frutas2 =["manga", "abacaxi","melancia"]

let todasFrutas=frutas.concat(frutas2);
console.log(todasFrutas);



/*
Use o método slice() para criar um novo array que contenha apenas os dois primeiros elementos do
array "todasFrutas". Imprima o novo array no console.*/


console.log(todasFrutas.slice(0,2));



/*
Use o método splice() para remover o segundo elemento do array "todasFrutas". Imprima o array
atualizado no console.*/

todasFrutas.splice(1,1);

console.log(todasFrutas);


/*
Use o método indexOf() para encontrar o índice da fruta "banana" no array "todasFrutas". Imprima o
índice no console.*/

console.log(todasFrutas.indexOf("manga"))



/*
Use o método filter() para criar um novo array que contenha apenas as frutas que começam com a letra
"m". Imprima o novo array no console.*/

    console.log(todasFrutas.filter(fruta => fruta.toLowerCase().startsWith("m")));


/*
Use o método map() para criar um novo array que contenha o dobro de cada elemento do array
"numeros". Imprima o novo array no console.*/

console.log(numeros.map(num => num * 2));



/*
Use o método forEach() para imprimir cada elemento do array "todasFrutas" no console.*/

todasFrutas.forEach(todasFrutas => console.log(todasFrutas));
