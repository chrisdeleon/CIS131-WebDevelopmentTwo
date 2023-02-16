// javascript objects
// anything you can describe in the real world
// objects are things which have properties (noun) and methods (functions)

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};

// access properties using dot notation
// console.log(pen.type);
// console.log(pen.color);
// console.log(pen.brand);

// change the value of a property
pen.color = "red";
// console.log("I write with a " + pen.color + " " + pen.type  + " pen.");

// use a string literal
// backtick
// console.log(`I write with a ${pen.color} ${pen.brand} ${pen.type}`)

// dynamically add new properties to an already created object
pen.price = "2.5";
// console.log(`My pen costs $${pen.price}`);




// ************************************************************
// example of an object: RPG Game Character Aurora
// have class create the aurora object with a name, health, and strength

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    describe(){
    }
};




const odin = {
    name: "Odin",
    health: 50,
    strength: 125,
    describe(){
        return `${this.name} has ${this.health} health points and ${this.strength} as strength`
    }
};

var chars = [aurora, odin];
// console.log(chars[1].describe());

for(var i = 0; i < chars.length; i++)
{
    console.log(chars[i].describe());
}