// create classes and instances of a class (object)

class Character {
    constructor (name, health, strength)
    {
        this.name = name;
        this.health = health;
        this.strength = strength;
    }

    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`
    }
}

var aurora = new Character("Aurora", 150, 25);

console.log(aurora.describe());

var odin = new Character("odin", 50, 125);

console.log(odin.describe());