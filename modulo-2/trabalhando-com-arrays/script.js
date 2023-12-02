const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);
// adicionar elementos
// push
let tamanho = arr.push('Boromir');
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift('Teste');
console.log(arr);
console.log(tamanho);

// remover elementos
// pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// shift
ultimoElemento = arr.shift()
console.log(arr);
console.log(ultimoElemento);

// pesquisar por um elemento
// includes
const inclui = arr.includes('Gandalf');
console.log(inclui);

// indexOf
const indice = arr.indexOf('Gandalf');
console.log(indice);

// Cortar e Concatenar
// slice
const hobbits = arr.slice(0,4);
const outros = arr.slice(-4)
console.log(hobbits);
console.log(outros);

// concat
const sociedade = hobbits.concat(outros, 'Boromir')
console.log(sociedade);

// substituição dos elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, 'Gandalf, o Cinzento');
console.log(sociedade);
console.log(elementosRemovidos);

// iterar sobre os elementos
for(i = 0; i<sociedade.length; i++){
    const elemento = sociedade[i];
    console.log(elemento + ' se encontra na posição ' + i);
}