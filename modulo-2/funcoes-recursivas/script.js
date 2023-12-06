function dividir(num){
    console.log(num);
    if(num % 2 === 0){
        dividir(num/2);
    }else{
        return num;
    }
}

// dividir(2048);

function dobrar(num){
    console.log(num);
    dobrar(num*2);
}

// dobrar(1); // overflow the call stack

function fatorial(num){
    console.log('Numero: ' + num);
    if(num === 0){
        return 1;
    }else if(num === 1){
        return 1
    }else{
        console.log(num + " * !" + (num-1));
        return num * fatorial(num-1);
    }
}

console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(5));

