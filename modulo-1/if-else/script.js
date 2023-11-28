const idade = parseFloat(prompt('Informe a sua idade:'));

if(idade >= 18){
    console.log('👍');
}else if(idade > 12){
    console.log('👎');
}else if(idade <= 12 || idade > 4){
    console.log('👱‍♂️');
}else{
    console.log('👼');
}

const res = (6===6)? "sim": "não";
console.log(res);