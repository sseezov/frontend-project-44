import greet from '../src/cli.js';
import brainPrime from './games/brain-prime.js';

function brainGames() {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  brainPrime(name, 3);
}

brainGames();
