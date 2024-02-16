class Character{
    constructor(name, hp, atk, dfs){
        this.name=name;
        this.hp=hp;
        this.atk=atk;
        this.dfs=dfs;
    }

    atack(target){
        if(target instanceof Character){
            const damage = this.atk - target.dfs;
            if(damage>0){
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

module.exports = Character;

