const input = document.getElementById('input');

document.getElementById('value').addEventListener('click',()=> {
    input.value = input.value===''?'Olá, Mundo!':''
    console.log(input.value);
    console.log(input.getAttribute('value'));
});

document.getElementById('type').addEventListener('click',()=>{
    input.type = input.type !== 'radio'? 'radio': 'type';
    // input.setAttribute('type', 'radio');
});

document.getElementById('placeholder').addEventListener('click', ()=>{
    input.placeholder = 'Digite algo...'
});

document.getElementById('disable').addEventListener('click',()=>{
    input.setAttribute('disabled', !input.disabled);
});

document.getElementById('data').addEventListener('click',()=>{
    const data = input.dataset.somethingElse;
    console.log(data);
    input.dataset.somethingElse = 'Algum outro valor';
    console.log(input.dataset.somethingElse);
});