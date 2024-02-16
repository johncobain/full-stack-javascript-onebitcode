const Character = require('./Character.js');
const Thief = require('./Thief.js');
const Mage = require('./Mage.js');
const Warrior = require('./Warrior.js');

const john = new Character('John', 50, 30, 10);
const mary = new Thief('Mary', 50, 20, 10);

const luke = new Mage('Luke',50, 10, 14, 15);
const alfred = new Warrior('Alfred',50, 35, 10, 15, 'defesa');

john.atack(luke);
mary.atack(alfred)

luke.atack(john);
luke.heal(alfred);
alfred.atack(mary)
alfred.changePosition();
alfred.atack(mary);

john.atack(alfred);

alfred.changePosition();

mary.atack(alfred);