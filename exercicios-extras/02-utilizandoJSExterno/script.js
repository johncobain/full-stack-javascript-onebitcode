const msg = document.querySelector('#msg');

const oldName = prompt('Digite o nome da pessoa mais velha:');
const oldAge = parseInt(prompt('Digite a idade da pessoa mais velha:'));
const newName = prompt('Digite o nome da pessoa mais nova:');
const newAge = parseInt(prompt('Digite a idade da pessoa mais nova:'));

const ageGap = oldAge-newAge;

msg.innerHTML = `Pessoa mais velha: ${oldName}, ${oldAge} anos.<br>
Pessoa mais nova: ${newName}, ${newAge} anos.<br>
Diferença de idade: ${ageGap} anos.`