//section storage
document.getElementById('sessionBtn').addEventListener('click', ()=>{
    const input = document.getElementById('session');
    sessionStorage.setItem('info', input.value);
    input.value = '';
})

document.getElementById('readSession').addEventListener('click', ()=>{
    const info = sessionStorage.getItem('info');
    alert('A informação salva na sessionStorage é: '+info)
})

//local storage
document.getElementById('localBtn').addEventListener('click',()=>{
    const input = document.getElementById('local');
    localStorage.setItem('text', input.value);
    input.value = '';
})

document.getElementById('readLocal').addEventListener('click', ()=>{
    const t = localStorage.getItem('text');
    alert('O texto salvo no localStorage: '+t)
})

//cookies
document.getElementById('cookieBtn').addEventListener('click', ()=>{
    const input = document.getElementById('cookie');
    //cookieName=value; expires=UTCStringDate; path=/dir;
    const cookie = 'info='+input.value+';';
    const expiration = 'expires='+ new Date(2024,0,12)
    const path = 'path=/;';
    document.cookie = cookie+expiration+path;
    input.value = '';
    console.log(document.cookie);
})

document.getElementById('cookie2Btn').addEventListener('click', ()=>{
    const input = document.getElementById('cookie2');
    //cookieName=value; expires=UTCStringDate; path=/dir;
    const cookie = 'text='+input.value+';';
    const expiration = 'expires='+ new Date(2024,0,11)
    const path = 'path=/;';
    document.cookie = cookie+expiration+path;
    input.value = '';
    console.log(document.cookie);
})