import { generateInteger, isPrime } from '../helpers.js';

export default () => {
  const num = generateInteger();
  const question = `Question: ${num}\n`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return { question, correctAnswer };
};
