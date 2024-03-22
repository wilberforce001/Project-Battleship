import { Ship, Gameboard, Player, ComputerPlayer } from '../src/index.ship';

describe('ship class', () => {
    test('hit method increases hits count', () => {
        const ship = new Ship(3);
        ship.hit();
        expect(ship.hits).toBe(1);
    })

    test('isSunk method returns true when all hits are made', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('isSunk method returns false when not all hits are made', () => {
        const ship = new Ship(3);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
    
})


describe('Gameboard class', () => {
    describe('placeShip method', () => {
        test('should place a ship horizontally on the game board', () => {

        });

        test('should place a ship vertically on the gameboard', () => {

        })
    })

    describe('receiveAttack method', () => {
        test('should record a missed attack on the gameboard', () => {

        })

        test('should hit a ship if the attack coordinates match the ship position', () => {

        })
    })

    describe('allShipsSunk method', () => {
        test('should return true if all ships on the game board are', () => {

        });

        test('should return false if not all ships on the game board are sunk', () => {

        });
    });
});

describe('Player class', () => {
    test('attack method should call receiveAttack on enemy Gameboard', () => {

        // A mock Gameboard for testing purposes
        const enemyGameboard = new Gameboard();
        enemyGameboard.receiveAttack = jest.fn();

        const player = new Player();

        player.attack(enemyGameboard, 3, 4);

        expect(enemyGameboard.receiveAttack).toHaveBeenCalledWith(3, 4);
    })
});

describe('ComputerPlayer class', () => {

    test('generateRandomAttack method should return valid coordinates', () => {

        const computerPlayer = new ComputerPlayer();
        const randomAttack = computerPlayer.generateRandomAttack();

        expect(randomAttack).toHaveProperty('row');
        expect(randomAttack).toHaveProperty('col');

        // Check if the coordinates are within the gameboard range (0 to 9)
        expect(randomAttack.row).toBeGreaterThanOrEqual(0);
        expect(randomAttack.row).toBeLessThan(10);
        expect(randomAttack.col).toBeGreaterThanOrEqual(0);
        expect(randomAttack.col).toBeLessThan(10);

    })

    test('generateRandomAttack method should not generate the same attack twice', () => {

        const computerPlayer = new ComputerPlayer();

        //Generate multiple random attacks
        const attacks = new Set();
        for (let i = 0; i < 100; i++) {
            const randomAttack = computerPlayer.generateRandomAttack(); // Corrected here
            const attackString = `${randomAttack.row}, ${randomAttack.col}`;
            attacks.add(attackString);
        }

        // Check if there are 100 unique attacks
        expect(attacks.size).toBe(100);
    })
})

describe('Ship class', () => {
    test('hit method increases hits count', () => {
        // Test code for the hit method
    });

    test('isSunk method returns true when all hits are made', () => {
        // Test code for the isSunk method when all hits are made
    });

    test('isSunk method returns false when not all hits are made', () => {
        // Test code for the isSunk method when not all hits are made
    });
});

describe('Gameboard class', () => {
    describe('placeShip method', () => {
        test('should place a ship horizontally on the game board', () => {
            // Test code for placing a ship horizontally
        });

        test('should place a ship vertically on the game board', () => {
            // Test code for placing a ship vertically
        });
    });

    describe('receiveAttack method', () => {
        test('should record a missed attack on the game board', () => {
            // Test code for recording a missed attack
        });

        test('should hit a ship if the attack coordinates match the ship position', () => {
            // Test code for hitting a ship
        });
    });

    describe('allShipsSunk method', () => {
        test('should return true if all ships on the game board are sunk', () => {
            // Test code for all ships being sunk
        });

        test('should return false if not all ships on the game board are sunk', () => {
            // Test code for not all ships being sunk
        });
    });
});

describe('Player class', () => {
    test('attack method should call receiveAttack on enemy Gameboard', () => {
        // Test code for the attack method
    });
});

describe('ComputerPlayer class', () => {
    test('generateRandomAttack method should return valid coordinates', () => {
        // Test code for generateRandomAttack method returning valid coordinates
    });

    test('generateRandomAttack method should not generate the same attack twice', () => {
        // Test code for generateRandomAttack method not generating the same attack twice
    });
});

