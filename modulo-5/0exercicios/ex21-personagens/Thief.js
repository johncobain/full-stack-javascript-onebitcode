const Character = require('./Character.js');

class Thief extends Character{
    constructor(name, hp, atk, dfs){
        super(name, hp, atk, dfs);
    }

    atack(target){
        if(target instanceof Character){
            const damage = 2*(this.atk - target.dfs);
            if (damage>0) {
                target.hp = target.hp - damage;
                console.log(`O jogador ${target.name} recebeu ${damage} de dano e ficou com ${target.hp} de vida`);
            }else{
                console.log(`O jogador ${target.name} não recebeu dano`);
            }
        }else{
            console.log('Alvo Inválido!');
        }
    }
}

module.exports = Thief;
