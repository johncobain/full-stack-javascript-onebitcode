let firstName = prompt("Digite o seu nome:");
let lastName = prompt("Digite o seu sobrenome:");
let course = prompt("Digite o seu campo de estudo:");
let year = Number(prompt("Digite o seu ano de nascimento:"));
const today = new Date();

console.log(`Recruta ${firstName} ${lastName}, estudando ${course} aos ${today.getFullYear() - year} anos.`);