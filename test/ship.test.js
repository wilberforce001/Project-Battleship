import Ship from '../src/index.ship';
import Gameboard from '../src/index.ship'

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

