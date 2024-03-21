import { Ship, Gameboard, Player } from '../src/index.ship';

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