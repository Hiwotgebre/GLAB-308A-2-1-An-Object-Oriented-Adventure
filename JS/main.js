// game.js
class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }

    roll() {
        const result = Math.floor(Math.random() * 20) + 1;
        this.log(`${this.name} rolled a ${result}.`);
    }

    log(message) {
        const log = document.getElementById('log');
        log.innerHTML += `<p>${message}</p>`;
    }
}

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout() {
        this.log(`${this.name} is scouting ahead...`);
        super.roll();
    }
}

// Creating an instance of Adventurer
const robin = new Adventurer("Robin", "Scout");

// Display adventurer info
document.getElementById('adventurer-info').innerHTML = `
    <strong>Name:</strong> ${robin.name}<br>
    <strong>Role:</strong> ${robin.role}<br>
    <strong>Health:</strong> ${robin.health}<br>
    <strong>Inventory:</strong> ${robin.inventory.join(", ")}
`;


