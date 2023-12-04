/*Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu. */
function menu(){
    return parseInt(prompt(`Bem vindo à nossa calculadora geométrica! Qual cálculo você deseja realizar?
1 - Área do triângulo
2 - Área do retângulo
3 - Área do quadrado
4 - Área do trapézio
5 - Área do círculo
6 - Sair`));
}

function triangle(){
    const base = parseFloat(prompt('Digite o valor da base do triângulo:'));
    const height = parseFloat(prompt('Digite o valor da altura do triângulo:'));
    return (base*height)/2;
}
function reqtangle(){
    const base = parseFloat(prompt('Digite o valor da base do retângulo:'));
    const height = parseFloat(prompt('Digite o valor da altura do retângulo:'));
    return base*height
}
function square(){
    const side = parseFloat(prompt('Digite o valor do lado do quadrado:'));
    return side*side;
}
function trapezoid(){
    const base = parseFloat(prompt('Digite o valor da base maior do traézio:'));
    const baseM = parseFloat(prompt('Digite o valor da base menor do trapézio:'));
    const height = parseFloat(prompt('Digite o valor da altura do trapézio:'));
    return ((base+baseM)*height)/2;
}
function circle(){
    const radius = parseFloat(prompt('Digite o valor do raio do círculo:'));
    return (radius*radius)*3.14;
}

function program(){
    let opt = 0;
    
    while(opt!==6){
        opt = menu();
        let res;
        switch (opt) {
            case 1:
                res = triangle();
                break;
            case 2:
                res = reqtangle();
                break;
            case 3:
                res = square();
                break;
            case 4:
                res = trapezoid();
                break;
            case 5:
                res = circle();
                break;
            case 6:
                alert('Encerrando...')
                break;
            default:
                alert('Entrada inválida!')
                break;
        }
        if(res){
            alert('Resultado: '+res);
        }
    }
}

program();