let pokemon = 'Charmander';

function evoluir(){
    pokemon = 'Charmeleon';
}

// console.log(pokemon);
evoluir();
// console.log(pokemon);

function criarAnimal(){
    let animal = 'Gato';
}

criarAnimal();
// console.log(animal); //gera erro

function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true;
        let situacao = 'Aprovado'
    }else{
        var aprovado = false;
        let situacao = 'Reprovado';
    }
    console.log(nota);
    console.log(aprovado);
    console.log(situacao); //erro
}


// avaliarNota(83);
// avaliarNota(49);

function ola(){
    var texto = 'olá, mundo'
}

// console.log(texto); /erro

console.log(nome);
console.log(sobrenome);

var nome = 'john';
let sobrenome = 'cobain';

console.log(nome);
console.log(sobrenome);