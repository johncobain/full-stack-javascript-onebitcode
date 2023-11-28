/*Cálculo de Dano
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, 

depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.

Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.

Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.*/

const playerAtcName = prompt("Digite o nome do Jogador que irá atacar:");
const playerAtcPower = parseFloat(prompt("Digite o poder de ataque do Jogador que irá atacar:"));

const playerDfcName = prompt("Digite o nome do Jogador que irá defender:");
let playerDfcHp = parseFloat(prompt("Digite os pontos de vida do Jogador que irá defender:"));
const playerDfcPower = parseFloat(prompt("Digite o poder de defesa do Jogador que irá defender:"));
const playerDfcShield = confirm("O Jogador que irá defender possui escudo?");

let damage = 0;
if(playerAtcPower > playerDfcPower && !playerDfcShield){
    damage = playerAtcPower - playerDfcPower;
}else if(playerAtcPower > playerDfcPower && playerDfcShield){
    damage = (playerAtcPower - playerDfcPower)/2;
}

playerDfcHp -= damage;

alert(`Jogador ${playerAtcName}: Ataque\n
Poder de ataque: ${playerAtcPower}\n
\n Jogador ${playerDfcName}: Defesa\n
Poder de defesa: ${playerDfcPower}\n
${playerDfcShield? "Possui escudo":"Não possui escudo"}\n
Pontos de vida atuais: ${playerDfcHp}\n
\nDano causado: ${damage}`);