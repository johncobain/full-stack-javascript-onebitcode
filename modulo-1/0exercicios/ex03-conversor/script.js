/*Conversor de Medidas
Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:
milímetro (mm)
centímetro (cm)
decímetro (dm)
decâmetro (dam)
hectômetro (hm)
quilômetro (km)
O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)*/

const metro = parseFloat(prompt("Digite um valor de medida em metro: "));

const unidade = parseInt(prompt(`Escolha a unidade de medida que você deseja converter:\n
1- milímetro (mm)\n
2- centímetro (cm)\n
3- decímetro (dm)\n
4- decâmetro (dam)\n
5- hectômetro (hm)\n
6- quilômetro (km)`));

let medida = null;
let conv = null;

switch (unidade) {
    case 1:
        conv = metro *1000;
        medida = 'milímetro';
        break;
    case 2:
        conv = metro *100;
        medida = 'centímetro';
        break;
    case 3:
        conv = metro *10;
        medida = 'decímetro';
        break;
    case 4:
        conv = metro / 10;
        medida = 'decâmetro';
        break;
    case 5:
        conv = metro / 100;
        medida = 'hectômetro';
        break;
    case 6:
        conv = metro / 1000;
        medida = 'quilômetro';
        break;
}

if(conv !== null){
    console.log(`${metro} metro(s) foi convertido para ${conv} ${medida}(s)!`);
}else{
    console.error('Opção inválida');
}