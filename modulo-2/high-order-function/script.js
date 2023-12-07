function calcular(a, b, operacao){
    console.log('Realizando uma operação.');
    const res = operacao(a,b);
    return res;
}

function somar(x, y){
    console.log('Realizando uma soma');
    return x + y;
}

console.log(calcular(3,5, somar));

console.log(calcular(8, 4, (x,y)=>{
    console.log('Realizando uma subtração');
    return x-y;
}));

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    });
}

const lista = ['Maçã', 'Banana', 'Laranja', 'Limão'];

for(i=0;i<lista.length;i++){
    exibirElemento(lista[i], i, lista);
}

lista.forEach(exibirElemento)

lista.forEach((elemento, indice, array)=>{
    console.log({
        elemento,
        indice,
        array
    });
})