const res = prompt('Escolha uma alternativa:\na\nb\nc')

switch(res){
    case "a":
        console.log('a');
        break;
    case "b":
        console.log('b');
        break;
    case "c":
        console.log('c');
        break;
    default:
        console.error('Alternativa não escolhida...');
}