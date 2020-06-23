let rs = require("readline-sync");


let mao = rs.question("esta usando mascara quando precisa sair de casa");
let mascara = rs.question("esta lavando as mãos frequentemente");


let resultado = mascara === "sim" && mao === "sim" ? 'Parabéns, voce é uma pessoa legal' : 'Precisa mehorar isso aí hein amiguinho, o Coronga não é uma invenção comunista';

console.log(resultado);