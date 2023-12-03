function dobro(x){
    alert('O dobro de ' + x + ' é ' +(2*x));
}

// dobro(5);
// dobro(7);
// dobro();

function dizerOla(nome = 'Mundo'){
    alert('Olá, ' + nome);
}

// dizerOla('John');
// dizerOla();

function soma(a, b){
    alert('Soma = ' + (a+b));
}

// soma(7, 6);

function criarUsuario(nome, email, senha, tipo = 'admin'){
    const usuario = {
        nome, email, senha, tipo
    }

    console.log(usuario);
}

function novoUsuario(nome, tipo = 'admin', email, senha){
    const usuario = {
        nome, email, senha, tipo
    }

    console.log(usuario);
}

// criarUsuario('John', 'John@dee.com', 'John007');
// novoUsuario('John', 'John@dee.com', 'John007');//gera erro

function muitosParametros(nome,telefone, endereco, aniversario, email, senha){

}
function objetoComoParametro(usuario){
    usuario.nome;
    usuario.telefone;
    usuario.endereco;
    usuario.aniversario;
    usuario.email;
    usuario.senha;
}

muitosParametros('nome','telefone', 'endereco', 'aniversario', 'email', 'senha');

const dadosDoUsuario = {
    nome:'',
    telefone:'', 
    endereco:'', 
    aniversario:'', 
    email:'', 
    senha:''
}

objetoComoParametro(dadosDoUsuario);