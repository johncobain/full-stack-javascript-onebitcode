const name = prompt(`Olá piloto!
Qual é o seu nome?`)

let velocity = 0;

const newVelocity = parseFloat(prompt(`Velocidade atual: ${velocity}km/s
${name}, com qual velocidade você deseja viajar na nave?`));

const confirmVelocity = confirm(`Deseja acelerar a nave para ${newVelocity}km/s?`);

if(confirmVelocity){
    velocity = newVelocity;
    alert(`Velocidade atual: ${velocity}km/s`);
}

if(velocity === 0){
    alert('A nave está parada!')
}else if(velocity < 40){
    alert('Você está devagar!');
}else if(velocity < 80){
    alert('Você está em uma boa velocidade!');
}else if(velocity < 100){
    alert('Você está rápido');
}else{
    alert('Controle automático forçado!')
}