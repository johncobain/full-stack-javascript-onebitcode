import { calculate } from "./calculate.js";

const input = document.getElementById('input');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

export function showOnInput(charKeyBtn){
    const value = charKeyBtn.dataset.value;
        input.value += value;
        input.focus();
}

export function clear(){
    input.value = '';
    input.focus();
}

export function insertKey(ev){
    ev.preventDefault();
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key;
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0,-1);
    }
    if(ev.key === 'Enter'){
        calculate();
    }
}