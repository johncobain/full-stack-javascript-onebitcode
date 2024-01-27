const dayjs = require('dayjs');

function birthday(year){
    const date = dayjs(year);
    const today = dayjs();
    const age = today.diff(date, 'year');
    const nextB = date.add(age+1,'year');
    const daysToNext = nextB.diff(today, 'day')

    console.log('--------------------------------');
    console.log(`Idade: ${age}`);
    console.log(`Próximo aniversário: ${nextB.format('DD/MM/YYYY')}`);
    console.log(`Dias até completar ${age+1} anos: ${daysToNext}`);
}

birthday('2005-08-20');
birthday('2010-02-01');