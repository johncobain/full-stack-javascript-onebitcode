/*Controle Financeiro
Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. 

Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

let current = parseFloat(prompt("Digite a quantidade de dinheiro inicial em sua conta: "));

let opt;
do{
    opt = parseInt(prompt(`Saldo atual: R$${current}\n
O que você deseja fazer?\n
1 - Adicionar Dinheiro\n
2 - Remover Dinheiro\n
3 - Sair`));
    
    switch (opt) {
        case 1:
            let add = parseFloat(prompt("Quanto você deseja adicionar?"));
            current += add;
            break;
        case 2:
            let remove = parseFloat(prompt("Quanto você deseja remover?"));
            current -= remove;
            break;
        case 3:
            alert('Encerrando o programa...')
            break;
        default:
            alert('Opção inválida!');
            break;
    }

}while(opt !== 3);