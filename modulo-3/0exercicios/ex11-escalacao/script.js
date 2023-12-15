function addPlayer(){
    const playersList = document.getElementById('players-list');
    const position = document.getElementById('addPosition').value;
    const name = document.getElementById('addName').value;
    const number = document.getElementById('addNumber').value;

    if (position == ''||name == ''||number == '') {
       alert('Insira todos os dados para escalar o jogador!') 
       return
    }
    const newPlayerLi = document.createElement('li');
    newPlayerLi.innerText = position+': '+name+' ('+number+')';
    newPlayerLi.id = 'player-'+number;

    const shouldAdd = confirm(`Adicionar o ${position} ${name}?`);

    if (shouldAdd) {
        playersList.appendChild(newPlayerLi);
        document.getElementById("addPosition").value = "";
        document.getElementById("addName").value = "";
        document.getElementById("addNumber").value = "";
    }
}

function removePlayer(){
    const playersList = document.getElementById('players-list');
    const number = document.getElementById('removeNumber').value;
    if (number == '') {
        alert('Insira o número do jogador a ser removido!')
        return;
    }
    const removedPlayer = document.getElementById('player-' + number);
    
    if (removedPlayer == null) {
        alert('Insira um número de jogador válido!');
        document.getElementById('removeNumber').value = "";
        return;
    }

    const shouldRemove = confirm(`Remover o jogador de número ${number}?`);

    if(shouldRemove){
        playersList.removeChild(removedPlayer);
        document.getElementById('removeNumber').value = "";
    }
}