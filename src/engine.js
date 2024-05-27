import readlineSync from 'readline-sync';
import gamesLibrary from './games-library.js';

export default (game) => {
  const MAX_ROUNDS = 3;
  const { description, questionAndAnswer } = gamesLibrary[game];
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let round = 0; round < MAX_ROUNDS; round += 1) {
    const { question, correctAnswer } = questionAndAnswer();
    const userAnswer = readlineSync.question(question);
    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
