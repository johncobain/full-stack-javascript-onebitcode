// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
    "1º Nível",
    ["2º nível", 42, true],
    [
        ["3º nível, 1º item", "Olá, mundo!"],
        ["3º nível, 2º item", "Oi, mundo!"],
    ],
    []
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[1][0]);
console.log(arr[1][1]);
console.log(arr[2][1]);
console.log(arr[2][1][0]);

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
];
console.table(matriz);

matriz[0].push('l1, c5');

console.table(matriz);


for(i=0; i< matriz.length; i++){
    console.log(matriz[i]);
    for(j=0; j< matriz[i].length; j++){
        console.log(`Posição (${i}, ${j}) Valor: ${matriz[i][j]}`);
    }
}