// 9 - Crie uma função que recebe um array de 3 números coloque eles em ordem crescente. Crie sua própria função para isso.

const prompt = require('prompt-sync')();
require('prompt-sync');

let numero1 = Number(prompt("Digite o primeiro numero: "));
let numero2 = Number(prompt("Digite o segundo numero: "));
let numero3 = Number(prompt("Digite o terceiro numero: "));

const numeros = [numero1, numero2, numero3];

function ordenarTresNumeros(arr) {
    let a = arr[0];
    let b = arr[1];
    let c = arr[2];
    let resultado = [];

    if (a < b && a < c) {
        resultado.push(a);

        if (b <= c) {
            resultado.push(b, c);

        } else {
            resultado.push(c, b);
        }
    } else if (b <= a && b <= c) {
        resultado.push(b);

        if (a <= c) {
            resultado.push(a, c)
        } else {
            resultado.push(c, a)
        }
    }else {
        resultado.push(c);
            if(a<= b){
                resultado.push(a,b);
            }else{
                resultado.push(b,a);
            }
    }

    return resultado;

}

const numerosOrdenados = ordenarTresNumeros(numeros);
console.log("Números em ordem crescente:", numerosOrdenados);
