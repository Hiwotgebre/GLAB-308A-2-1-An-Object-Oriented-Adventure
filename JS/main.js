// Define the Character class
class Character {
    constructor(name, health, inventory) {
        this.name = name;
        this.health = health;
        this.inventory = inventory;
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Create a basic adventurer object
const adventurer = new Character("Robin", 10, ["sword", "potion", "artifact"]);
console.log(adventurer); // Test output

// Extend the Character to include companions
class Adventurer extends Character {
    constructor(name, health, inventory, companion) {
        super(name, health, inventory);
        this.companion = companion;
    }
}

// Companion class
class Companion extends Character {
    constructor(name, type, belongings) {
        super(name, 100, belongings); // Assuming all companions have full health and specific belongings
        this.type = type;
    }
}

// Create the main adventurer and their companions
const leo = new Companion("Leo", "Cat", ["collar", "toy mouse"]);
const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);
leo.companion = frank;

const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], leo);

console.log(robin); // Test the nested structure

// Add methods for actions
Adventurer.prototype.scout = function() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
}

// Example of using the method
robin.scout();
robin.roll();

