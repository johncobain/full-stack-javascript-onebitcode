/*Robô da Tabuada
Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar*/

let num = parseFloat(prompt('Digite o número que você quer ver a tabuada:'));

let res = '';

for(i=0; i<=20; i++){
    res += `${num} X ${i} = ${num*i}\n`;
}

console.log(`Resultado da tabuada de ${num}`);
console.log(res);