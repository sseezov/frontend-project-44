import { generateInteger } from '../helpers.js';

export default () => {
  const num1 = generateInteger();
  const num2 = generateInteger();
  const question = `Question: ${num1} ${num2}\n`;
  const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));
  const correctAnswer = getGcd(num1, num2);

  return { question, correctAnswer };
};
