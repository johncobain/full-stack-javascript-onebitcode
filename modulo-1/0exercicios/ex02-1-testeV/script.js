/*Teste de Velocidade
Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/

const carName1 = prompt("Digite o nome do veículo 1: ");
const carSpeed1 = prompt("Digite a velocidade do veículo 1: ");
const carName2 = prompt("Digite o nome do veículo 2: ");
const carSpeed2 = prompt("Digite a velocidade do veículo 2: ");

if(carSpeed1 > carSpeed2){
    alert(carName1 + " é o veículo mais veloz!");
}else if(carSpeed1 < carSpeed2){
    alert(carName2 + " é o veículo mais veloz!");
}else{
    alert(carName1 + " é tão veloz quanto " + carName2 + '!');
}