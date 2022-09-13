import greet from '../src/cli.js';
import brainEven from './brain-even.js';

function brainGames() {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  brainEven(name);
}

brainGames();
