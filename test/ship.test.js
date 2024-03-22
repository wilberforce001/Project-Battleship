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
