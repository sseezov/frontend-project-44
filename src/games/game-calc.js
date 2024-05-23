import readlineSync from 'readline-sync';
import { generateInteger } from '../helpers.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  const maxNumber = 20;
  const mathSigns = ['+', '-', '*'];
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };

  for (let round = 1; round <= 3; round += 1) {
    const num1 = generateInteger(maxNumber);
    const num2 = generateInteger(maxNumber);
    const operator = mathSigns[generateInteger(mathSigns.length - 1)];
    const correctAnswer = operations[operator](num1, num2);
    const answer = readlineSync.question(`Question: ${num1} ${operator} ${num2}\n`);
    if (correctAnswer === Number(answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
