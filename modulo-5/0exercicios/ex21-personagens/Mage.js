const Character = require('./Character.js');

class Mage extends Character{
    constructor(name, hp, atk, dfs, magic){
        super(name, hp, atk, dfs);
        this.magic = magic
    }
    atack(target){
        if(target instanceof Character){
            const damage = (this.atk+this.magic) - target.dfs;
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
    heal(target){
        if(target instanceof Character){
        target.hp += 2*this.magic;
        console.log(`O jogador ${target.name} recebeu ${2*this.magic} de cura e ficou com ${target.hp} de vida`);
        }else{
            console.log('Alvo Inválido!');
        }
    }
}

module.exports = Mage;
