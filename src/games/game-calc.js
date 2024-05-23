import { generateInteger } from '../helpers.js';

export default () => {
  const maxNumber = 20;
  const mathSigns = ['+', '-', '*'];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  const num1 = generateInteger(maxNumber);
  const num2 = generateInteger(maxNumber);
  const operator = mathSigns[generateInteger(mathSigns.length - 1)];
  const correctAnswer = String(operations[operator](num1, num2));
  const question = `Question: ${num1} ${operator} ${num2}\n`;

  return { question, correctAnswer };
}
