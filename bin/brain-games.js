import greet from '../src/cli.js';
import brainCalc from './games/brain-calc.js';

function brainGames() {
  console.log('Welcome to the Brain Games!');
  const name = greet();

  brainCalc(name, 3);
}

brainGames();
