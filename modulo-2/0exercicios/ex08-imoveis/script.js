/*Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.

Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.

O menu também deve ter a opção de mostrar todos os imóveis salvos. */
const imoveis = [];

let opt ='';
while(opt!==4){
    opt = parseInt(prompt(`Imóveis cadastrados: ${imoveis.length}
1 - Salvar um imóvel
2 - Mostrar imóveis salvos
3 - Remover um imóvel
4 - Sair`));

console.clear();
switch (opt) {
    case 1:
        const imovel = {};
        imovel.nome = prompt('Digite o nome do proprietário do imóvel:');
        imovel.quartos = parseInt(prompt('Quantos quartos há no imóvel?'));
        imovel.banheiros = parseInt(prompt('Quantos banheiros há no imóvel?'));
        imovel.garagem = prompt('O imóvel possui garagem?(s/n)').toLowerCase();

        const confirma = confirm(`Salvar imóvel?
Propietário(a): ${imovel.nome}
Quantidade de Quartos: ${imovel.quartos}
Quantidade de Banheiros: ${imovel.banheiros}
${imovel.garagem === 's'? 'Possui garagem': 'Não possui garagem'}\n\n`);
        if(confirma){
            imoveis.push(imovel);
        }
        alert(`Imóvel de ${imovel.nome} registrado!`);
        break;
    case 2:
        let mensagem = '';
        for(i=0;i<imoveis.length;i++){
            mensagem +=`Imóvel nº ${i+1}
Propietário(a): ${imoveis[i].nome}
Quantidade de Quartos: ${imoveis[i].quartos}
Quantidade de Banheiros: ${imoveis[i].banheiros}
${imoveis[i].garagem === 's'? 'Possui garagem': 'Não possui garagem'}\n\n`;
        }
        console.log(`Imóveis salvos: ${imoveis.length}\n\n` +mensagem);
        break;
    case 3:
        let remover = parseInt(prompt('Qual o número do imóvel que deseja remover:'));

        imoveis.splice(remover-1,1);
        alert(`Imóvel nº ${remover} removido!`);
        break;
    case 4:
        alert('Encerrando...');
        break;
    default:
        alert('Entrada Inválida!');
        break;
}
}