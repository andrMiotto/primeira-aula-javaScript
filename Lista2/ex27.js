/*27 - Crie uma função chamada "criarMatriz" que recebe o número de linhas e o número de colunas
como parâmetros e retorna uma matriz com essas dimensões preenchida com números aleatórios.*/


const prompt = require("prompt-sync")();


function criarMatriz(linhas, colunas) {
    const matriz = [];
    for (let i = 0; i < linhas; i++) {
        const linha = [];
        for (let j = 0; j < colunas; j++) {
            linha.push(Math.floor(Math.random() * 100)); 
        }
        matriz.push(linha);
    }
    return matriz;
}

const minhaMatriz = criarMatriz(3, 4);
console.log(minhaMatriz);
