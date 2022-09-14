import { question } from 'readline-sync';

export default function brainEven(username = 'username', rounds = 3) {
  let score = 0;
  while (score < rounds) {
    const randomNumber = Math.round(Math.random() * 20);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    const answer = question(`Answer "yes" if the number is even, otherwise answer "no".
Question: ${randomNumber}
`);
    console.log(`Your answer: ${answer}`);
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${username}!`);
      score = 0;
      break;
    }
  }

  if (score === 3) console.log(`Congratulations, ${username}`);
}
