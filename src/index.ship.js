
export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        return this.hits >= this.length;
    }
}

export class Gameboard {
    constructor() {
        this.grid = [];
        this.missedAttacks = [];

        for (let i = 0; i < 10; i++) {
            this.grid.push(Array(10).fill(null));
        }
    }

    placeShip(ship, row, col, isVertical) {

    }

    receiveAttack(row, col) {

    }

    allShipSunk() {

    }
}

export class Player {
    constructor() {

    }

    attack(enemyGameboard, row, col) {
        enemyGameboard.receiveAttack(row, col);
    }
}

export class ComputerPlayer {
    constructor() {
        this.previousAttacks = new Set(); // Set to store previous attacks
    } 

    // Method for generating a random attack
    generateRandomAttack() {
        let row, col;
        do {
            
            // Generate random coordinates within the gameboard range
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        } while (this.previousAttacks.has(`${row}, ${col}`)); // Repeat if the coordinate has been attacked before

        this.previousAttacks.add(`${row}, ${col}`);

        return { row, col };
    }
}
