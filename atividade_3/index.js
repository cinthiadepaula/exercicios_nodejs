// ## Importe a biblioteca ##
let rs = require("readline-sync");


// ## Faça o código ##
//atividade 03 - Calcular a Area do Quadrado


let numero1 = rs.question("Digite um lado do quadrado: ");
let numero2 = rs.question("Digite o outro lado do quadrado: ");

numero1 = Number (numero1);
numero2 = Number (numero2);

resultado = (numero1*numero2);

console.log("A area do quadrado é: " + resultado)

