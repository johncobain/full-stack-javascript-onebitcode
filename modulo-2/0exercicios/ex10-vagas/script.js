function menu(vagas){
    const telaOpt = parseInt(prompt(`Bem-Vindo(a) ao Sistema de Vagas de Emprego Johnny (SVEJ)
Atualmente temos um total de ${vagas.length} vagas

Qual é o seu desejo?
1 - Listar vagas disponíveis
2 - Criar um nova vaga
3 - Visualizar uma vaga
4 - Inscrever um candidato em uma vaga
5 - Excluir uma vaga
6 - Sair`));
    return telaOpt;
}

function candidatos(vaga){
    if(vaga.candidatos.length > 0){
        let nomeCandidadtos = '';
            vaga.candidatos.forEach(el =>{
                if (nomeCandidadtos === '') {
                    nomeCandidadtos = el;
                }else{
                    nomeCandidadtos += ', ' + el;
                }
            });
        return nomeCandidadtos;
    }else{
        return 'Nenhum Candidato cadastrado';
    }
}
function vagasTotais(vagas){
    if(vagas.length > 0){
        let res = '';
        vagas.forEach((elemento, indice) => {
            res += `Vaga nº ${indice+1}: ${elemento.nome}
Quantidade de Candidatos: ${elemento.candidatos.length}
Nome dos candidatos: ${candidatos(elemento)}

`});
        alert(res);
    }else{
        alert('Não há vagas cadastradas!');
    }
}
function criarVaga(vagas){
    const novaVaga = {candidatos: []};
    novaVaga.nome = prompt('Qual será o nome da nova vaga?');
    novaVaga.descricao = prompt('Qual será a descrição da nova vaga?');
    novaVaga.dataLimite = prompt('Qual será a data limite da vaga? (DD/MM/YYYY)')
    let aplicar = confirm('Aplicar a nova vaga no sistema?');
    if(aplicar){
        alert(`Vaga de ${novaVaga.nome} aplicada ao sistema!`);
        vagas.push(novaVaga);
    }
}
function visualizarVaga(vagas){
    if(vagas.length > 0){
        const vaga = parseInt(prompt('Qual o índice da vaga que você deseja visualizar?'))-1;   
            
        if(vagas[vaga]){
            let vagaInf = `Índice da vaga: ${vaga}
    Nome: ${vagas[vaga].nome}
    Descrição: ${vagas[vaga].descricao}
    Data limite: ${vagas[vaga].dataLimite}
    Quantidade de candidatos: ${vagas[vaga].candidatos.length}
    Nome dos candidatos: ${candidatos(vagas[vaga])}`;
            alert(vagaInf);
        }else{
            alert('Índice incorreto!');
        }
    }else{
        alert('Não há vagas cadastradas!');
    }
}
function inscreverCandidato(vagas){
    if(vagas.length > 0){
        const novoCandidato = prompt('Qual o nome do candidato inscrito?');
        const vaga = parseInt(prompt('Qual o índice da vaga que você deseja adicionar o candidato?'))-1;
        if(vagas[vaga]){
            const inscrever = confirm(`Inscrever o candidato ${novoCandidato} na vaga de ${vagas[vaga].nome}?`);
            if(inscrever){
                vagas[vaga].candidatos.push(novoCandidato);
                alert(`Candidato ${novoCandidato} adicionado com sucesso!`);
            }
        }else{
            alert('Índice incorreto!');
        }
    }else{
        alert('Não há vagas cadastradas!');
    }
}
function excluirVaga(vagas){
    if(vagas.length > 0){
        const vaga = parseInt(prompt('Qual o índice da vaga que você deseja excluir?'))-1;  
            
        if(vagas[vaga]){
            vagas.splice(vaga,1);
            alert(`Vaga de ${vagas[vaga].nome} removida!`);
        }else{
            alert('Índice incorreto!');
        }
    }else{
        alert('Não há vagas cadastradas!');
    }
}


function sistema(){
    const vagas = [];
    let opt = 0;
    while(opt !== 6){
        opt = menu(vagas);
        switch(opt){
            case 1:
                vagasTotais(vagas);
                break;
            case 2:
                criarVaga(vagas);
                break;
            case 3:
                visualizarVaga(vagas);
                break;
            case 4:
                inscreverCandidato(vagas);
                break;
            case 5:
                excluirVaga(vagas);
                break;
            case 6:
                alert('Encerrando...')
                break;
            default:
                alert('Entrada inválida!');
                break;
        }
    }
}

sistema();