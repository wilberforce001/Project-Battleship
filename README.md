# Project-Battleship

I began the project by setting up Webpack, a module bundler which takes JavaScript files and their dependencies and bundles them into a single file or multiple files for the purpose of optimizing them for deployment. The steps were as follows;

    1. Ran npm init -y to create a 'package.json' file which serves as a central hub for the management and the configuration of Node.js projects. It is hence an important component in development workflows of modern javascript. 
    
    2. Installed Webpack and Webpack CLI. Did this by running this code: npm install webpack webpack-cli --save-dev.

    3. Created a Webpack configuration file that will define how project's assets are bundled by webpack.

    4. Installed Babel and necessary presets as dev dependencies to allow use of ES6 import statements and Jest with Babel.

    5. Created a '.babelrc' file and configured it to use the '@babel/preset-env' preset.

    6. Updated 'package.json' file by adding scripts for building the project with Webpack.

Having finished Webpack setup, i began the implementation of each of the required component of the project as follows: 

1. Ship Class/Factory;

Defined the Ship class with properties for length, number of hits and whether it's sunk. I also implemented a constructor method that initializes the above properties when a new Ship object is created. 

The hit() method increments the number of hits on the ship each time it is called. isSunk() method calculates whether the ship is considered sunk based on its length and the number of hits it has received. If the number of hits equals or exceeds the length of the ship, it returns 'true' to indicate that the ship is sunk, otherwise, return 'false'. 

2. Implementing the 'Gameboard' class
 
 This is the outline of what the 'Gameboard' class would have;

    (i) Properties
    A grid representing the game board
    An array to keep track of missed attacks
    
    (ii) Methods
    'placeShip(ship, row, col, isVertical)': Places a ship on the game board at the specified row and column. The isVertical parameter indicates whether the ship should be placed vertically or horizontally.
    'receiveAttack(row, col)': Records the coordinates of a player's attack. If the attack hits a ship, the corresponding ship's hit() method should be called.
    'allShipsSunk()': Checks if all ships on the game board have been sunk.

Defined 'describe' functions for different tests which in jest is used to group related test cases together

Immplemented a player class to interact with the Game and created a method for attacking the enemy Gameboard

Implemented a computer player capable of making random plays and ensuring it doesn't shoot the same coordinate twice. 
