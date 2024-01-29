function media(...n){
    const sum = n.reduce((accum, num,)=> accum+num,0);
    return sum/n.length;
}

function mediaPonderada(...num){
    let len = 0;
    const sum = num.reduce((accum,nums)=>{
        len+=nums.p;
        return accum + (nums.n*nums.p);
    },0)
    return sum/len;
}

function mediana(...n){
    n.sort((a,b)=>a-b);
    if(n.length%2 === 0){
        const sum = n[Math.floor(n.length/2)-1]+n[Math.floor(n.length/2)];
        return sum/2;
    }else{
        return n[Math.round(n.length/2)-1];
    }
}

function moda(...n){
    //[[n,qtd],[n,qtd]]
    const quantidades = n.map(num=>[
        num,
        n.filter(number =>num===number).length
    ])
    quantidades.sort((a,b)=> b[1]-a[1])

    return quantidades[0][0];
}

console.log(media(2, 6, 3, 7, 4));
console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }));
console.log(mediana(2, 4, 5, 7, 42, 99));
console.log(mediana(15, 14, 8, 7, 3));
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4));



