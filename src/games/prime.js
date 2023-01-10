import getRandomNumber from '../getRandomNumber.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export default function generateRound() {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
}
