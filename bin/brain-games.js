import greet from '../src/cli.js';
import brainGcd from './games/brain-gcd.js';

function brainGames() {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  brainGcd(name, 3);
}

brainGames();
