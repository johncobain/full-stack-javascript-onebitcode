/*## Cadastro de Devs

- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.*/

const form = document.getElementById('devForm');
const addTech = document.getElementById('newTech');
const ul = document.getElementById('techInputs');

const devs = [];
let inputRows = 0;

function createLabel(text, htmlFor){
    const label = document.createElement('label');
    label.htmlFor = htmlFor;
    label.innerText = text;
    return label;
}

function createInput(id, value, name,type, placeholder){
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;
    return input;
}

addTech.addEventListener('click', () =>{
    const newLi = document.createElement('li');
    const rowIndex = inputRows;
    inputRows++;
    newLi.id = 'newRow-' + rowIndex;
    newLi.className = 'rowList';
    
    const newLabelInput = createLabel('Tecnologia: ', 'techName-'+rowIndex);
    const newInput = createInput('techName-'+rowIndex, '', 'techName', 'text', 'Ex.: JavaScript, Python...');

    const expLabelTitle = createLabel(' Experiência: ');
    const id1 = 'expLevel-'+rowIndex+'-1';
    const expRadio1 = createInput(id1, '0-2 anos', 'expRadio-'+rowIndex, 'radio');
    const expLabel1 = createLabel('0-2 anos', id1);
    const id2 = 'expLevel-'+rowIndex+'-2';
    const expRadio2 = createInput(id2, '3-4 anos', 'expRadio-'+rowIndex, 'radio');
    const expLabel2 = createLabel('3-4 anos', id2);
    const id3 = 'expLevel-'+rowIndex+'-3';
    const expRadio3 = createInput(id3, '5+ anos', 'expRadio-'+rowIndex, 'radio');
    const expLabel3 = createLabel('5+ anos', id3);

    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'Remover Tecnologia';
    removeButton.addEventListener('click', ()=>{
        ul.removeChild(newLi);
    })

    newLi.append(
        newLabelInput, newInput, expLabelTitle, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeButton
    )
    ul.appendChild(newLi);
})

form.addEventListener('submit', ev=>{
    ev.preventDefault();
    const fullName = document.querySelector('#name');
    const devTechRows = document.querySelectorAll('.rowList');
    const tecnologies = [];
    devTechRows.forEach(row=>{
        const techName = document.querySelector('#'+row.id+' input[name="techName"]').value;
        const techExp = document.querySelector('#'+row.id+' input[type="radio"]:checked').value;
        tecnologies.push({name:techName, experience:techExp})
    })

    const newDev={fullName: fullName.value, tecnologies};
    devs.push(newDev);
    alert('Dev cadastrado com sucesso!');

    fullName.value = '';
    devTechRows.forEach(row=>row.remove());
    console.log(devs);
})