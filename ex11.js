/*11 - Exiba os números de 1 a 30 com as seguintes regras:
Se divisível por 3, exiba "Fizz".
Se divisível por 5, exiba "Buzz".
Se divisível por 3 e 5, exiba "FizzBuzz".
Caso contrário, exiba o número.*/




let numero = 0;

do {
    numero++;

    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log(`FizzBuzz`);
    } else if (numero % 3 == 0) {
        console.log(`Fizz`);
    } else if (numero % 5 == 0 ) {
        console.log(`Buzz`);
    } else {
        console.log(numero);

    }



} while (numero <= 30)











