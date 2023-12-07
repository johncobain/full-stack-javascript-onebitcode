const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// Map

// const nomes = [];

// for(i=0; i<personagens.length; i++){
//     nomes.push(personagens[i].nome);
// }

const nomes = personagens.map(personagem=>personagem.nome)

console.log(nomes);

// Filter

// const orcs =[];

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca === 'Orc'){
//         orcs.push(personagens[i]);
//     }
// }

const orcs = personagens.filter(personagem => personagem.raca === 'Orc');

console.log(orcs);

// Reduce

const nivelTotal = personagens.reduce((acum, personagem)=> acum + personagem.nivel, 0);

console.log(nivelTotal);

const racas = personagens.reduce( (acum, personagem)=>{
    if (acum[personagem.raca]) {
      acum[personagem.raca].push(personagem);
    } else {
      acum[personagem.raca] = [personagem]
    }
    return acum;
  }, {});


console.log(racas);


// Sort

const personagensOrdenados = personagens.slice().sort((a,b)=> b.nivel - a.nivel);

console.log(personagens);
console.log(personagensOrdenados);