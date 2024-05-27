import { generateInteger, isEven } from '../helpers.js';

export default () => {
  const number = generateInteger();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}\n`;
  return { question, correctAnswer };
};
