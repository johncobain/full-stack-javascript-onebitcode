/*Estruturando um Projeto Moderno
Você deverá criar um projeto npm e instalar nele o webpack e o babel, integrar o babel ao webpack utilizando o babel-loader (que pode ser instalado através do npm). Você também deverá integrar o css ao webpack, utilizando o style-loader e o css-loader (ambos podem ser instalados através do npm).
Para executar o webpack você deverá criar um script chamado “build”. Além disso, a saída do webpack deve ser nomeada de acordo com o nome do ponto de entrada no formato “[name].min.js” e o seu conteúdo deve estar minificado.
Por fim, você deve testar seu projeto criando uma página html simples que seja capaz de carregar a estilização e o javascript de saída do webpack corretamente.*/
import './style/style.css'
import dayjs from 'dayjs'
const body = document.querySelector('body');

document.querySelector('.white-theme').addEventListener('click', ()=>{
    body.classList.remove('dark');
    body.classList.add('white');
});
document.querySelector('.dark-theme').addEventListener('click', ()=>{
    body.classList.remove('white');
    body.classList.add('dark');
});


document.querySelector('.day').textContent = `Hoje é: ${dayjs().format("DD/MM/YYYY")}`