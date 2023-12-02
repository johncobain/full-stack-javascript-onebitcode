/*Pilha de Cartas
Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

const cartas = ['10', '5', 'A', 'Copas'];
let opt = null;

while(opt !== 3){
    let message = 'Cartas na pilha: ' + cartas.length + ' cartas.'
    opt = parseInt(prompt(message + `\n\nO que deseja fazer?
1 - Adicionar uma carta
2 - Puxar uma carta
3 - Sair`));

    switch (opt) {
        case 1:
            let novaCarta = prompt(`Adicionar Carta
Digite o nome da Carta:`);
            cartas.push(novaCarta);
            alert(`Carta ${novaCarta} adicionado ao topo da pilha!`)
            break;
        case 2:
            let puxada = cartas.pop();
            alert(`Carta ${puxada} puxada do topo da pilha!`);
            break;
        case 3:
            alert('Encerrando o programa...')
            break;
        default:
            alert('Entrada inválida!')
            break;
    }
}