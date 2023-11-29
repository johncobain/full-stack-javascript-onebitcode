/*Visitando Novas Cidades
Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */

const nome = prompt("Turista, qual é o seu nome?");

let visita = prompt('Você já visitou alguma cidade?(s/n)').toLowerCase();

let cidades = '';
let cidadesN = 0

while (visita === 's') {
    cidadesN++;

    let cidade = prompt('Qual é o nome da cidade que você visitou?');
    if(cidades === ''){
        cidades = cidade
    }else{
        cidades += ', ' + cidade;
    }

    visita = prompt('Você visitou alguma outra cidade?(s/n)').toLowerCase();
}

if(cidadesN > 0){
    console.log(`Turista: ${nome}\n
Quantidades de cidades visitadas: ${cidadesN}\n
Cidades Visitadas: ${cidades}`);
}else{
    console.log(`${nome}, você não visitou nenhuma cidade.`);
}