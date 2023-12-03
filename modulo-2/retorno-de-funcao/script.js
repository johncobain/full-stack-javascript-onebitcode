function calcularMedia(a,b){
    const media = (a+b)/2
    return media;
}

const res = calcularMedia(8,6);
console.log(res);

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto;
}

console.log(criarProduto('Notebook Nitro5', 3999));

function areaRetangular(base, altura){
    return base*altura;
}

function areaQuadrada(lado) {
    return areaRetangular(lado,lado)
}

console.log(areaRetangular(3,5));
console.log(areaQuadrada(9));

function ola(){
    let texto = '...';
    return texto;
    texto = 'Olá, mundo';
    console.log(texto);
}

console.log(ola());

function maioridade(idade){
    if(idade>=18){
        return 'maior de idade';
    }else{
        return 'menor de idade';
    }
}

console.log(maioridade(29));
console.log(maioridade(13));