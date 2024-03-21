
class Ship {
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

class Gameboard {
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
};

export default (Ship, Gameboard);