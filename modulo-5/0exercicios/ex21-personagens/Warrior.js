const Character = require('./Character.js');

class Warrior extends Character{
    constructor(name, hp, atk, dfs, shield, position){
        super(name, hp, atk, dfs);
        this.initialDfs = dfs;
        this.shield=shield;
        this.position=position;
        if(this.position==='defensa')this.dfs+=this.shield;
    }

    atack(target){
        if(this.position==='ataque'){
            if(target instanceof Character){
                const damage = this.atk - target.dfs;
                if (damage>0) {
                    target.hp = target.hp - damage;
                    console.log(`O jogador ${target.name} recebeu ${damage} de dano e ficou com ${target.hp} de vida`);
                }else{
                    console.log(`O jogador ${target.name} não recebeu dano`);
                }
            }else{
                console.log('Alvo Inválido!');
            }
        }else{
            console.log(`O jogador ${this.name} está em posição de defesa`);
        }
    }

    changePosition(){
        if(this.position==='ataque'){
            this.position = 'defesa';
            this.dfs += this.shield;
        }else if(this.position==='defesa'){
            this.position = 'ataque';
            this.dfs = this.initialDfs;
        }
        console.log(`O jogador ${this.name} está em posição de ${this.position}`);
    }
}

module.exports = Warrior;


// Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).



// Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa devem ser considerados (comportamento normal).