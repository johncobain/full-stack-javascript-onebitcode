/*Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 

O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */
const pacientes = ['Matheus', 'Marcos', 'Cecília', 'Julia'];
let opt = null;

while(opt !== 3){
    let message = 'Pacientes na fila:'
    for (i = 0; i < pacientes.length; i++) {
        message += `\n${i+1}º - ${pacientes[i]}`
    }
    opt = parseInt(prompt(message + `\n\nO que deseja fazer?
1 - Novo Paciente
2 - Consultar Paciente
3 - Sair`));

    switch (opt) {
        case 1:
            let novoPaciente = prompt(`Adicionar Paciente
Digite o nome do Paciente:`);
            pacientes.push(novoPaciente);
            alert(`Paciente ${novoPaciente} adicionado ao fim da fila!`)
            break;
        case 2:
            let consultado = pacientes.shift();
            alert(`Paciente ${consultado} consultado!`);
            break;
        case 3:
            alert('Encerrando o programa...')
            break;
        default:
            alert('Entrada inválida!')
            break;
    }
}