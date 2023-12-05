let pessoa = {
    nome: 'John',
    idade: 18,
    dizerOla(){
        console.log('Olá, meu nome é ' + this.nome);
    }
}

console.log(pessoa);
pessoa.dizerOla();