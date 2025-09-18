/*27 - Crie uma função chamada "criarMatriz" que recebe o número de linhas e o número de colunas
como parâmetros e retorna uma matriz com essas dimensões preenchida com números aleatórios.*/

const prompt = require('prompt-sync')();

function criarMatriz(linhas, colunas) {
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        let linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.floor(Math.random() * 100)); 
        }
        matriz.push(linha);
    }

    return matriz;
}

let linhas = parseInt(prompt("Digite o número de linhas: "));
let colunas = parseInt(prompt("Digite o número de colunas: "));

let matriz2 = criarMatriz(linhas, colunas);

console.log("Matriz gerada:");
console.table(matriz2);