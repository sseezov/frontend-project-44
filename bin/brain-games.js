import greet from '../src/cli.js';
import brainProgression from './games/brain-progression.js';

function brainGames() {
  console.log('Welcome to the Brain Games!');
  const name = greet();
  brainProgression(name, 3);
}

brainGames();
