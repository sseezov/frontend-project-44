import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

export default function generateRound() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
}
