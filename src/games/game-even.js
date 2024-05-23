import readlineSync from 'readline-sync';
import { generateInteger, isEven } from '../helpers.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 1; round <= 3; round += 1) {
    const number = generateInteger();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${number}\n`);
    if (correctAnswer === answer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
