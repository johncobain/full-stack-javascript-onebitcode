alert('Bem-vindo! A seguir pediremos que informe alguns dados.');
const name = prompt('Digite o seu nome');
const age = prompt('Digite a sua idade');
const confirmAge = confirm(`Sua idade é ${age} anos?`);

alert(`Nome: ${name}
Idade: ${age}
Idade confirmada? ${confirmAge?'Sim':'Não'}`);