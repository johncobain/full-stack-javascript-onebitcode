/*Procurando Palíndromos
Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda. */

let palavra = prompt('Digite uma palavra para verificar se ela é um palíndromo:');
let palavraInverso = '';

for(i = palavra.length - 1; i>=0; i--){
    palavraInverso += palavra[i]
}

if(palavra === palavraInverso){
    console.log(`A palavra ${palavra} é um palíndromo!`);
}else{
    console.log(`A palavra ${palavra} não é um palíndromo!`);
    console.log(`Palavra escrita normal: ${palavra}\nPalavra ao contrário: ${palavraInverso}`);
}