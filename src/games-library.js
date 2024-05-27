import gameCalc from './games/game-calc.js';
import gameEven from './games/game-even.js';
import gameGcd from './games/game-gcd.js';
import gamePrime from './games/game-prime.js';
import gameProgression from './games/game-progression.js';

export default {
  even: {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionAndAnswer: gameEven,
  },
  calc: {
    description: 'What is the result of the expression?',
    questionAndAnswer: gameCalc,
  },
  gcd: {
    description: 'Find the greatest common divisor of given numbers.',
    questionAndAnswer: gameGcd,
  },
  progression: {
    description: 'What number is missing in the progression?',
    questionAndAnswer: gameProgression,
  },
  prime: {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    questionAndAnswer: gamePrime,
  },
};
