import { question } from 'readline-sync';

export default function brainProgression(username = 'username', rounds = 3) {
  let score = 0;
  while (score < rounds) {
    let randomNumber = Math.round(Math.random() * 20);
    const randomIncrement = Math.round(Math.random() * 10);
    const randomSolution = Math.round(Math.random() * 10);
    const randomArray = [randomNumber];
    const setRandomArray = () => {
      while (randomArray.length < 10) {
        randomArray.push(randomNumber += randomIncrement);
      }
    };
    setRandomArray();
    const correctAnswer = randomArray[randomSolution];
    randomArray[randomSolution] = '..';
    const printArray = randomArray.join(' ');

    const answer = question(`What number is missing in the progression?
Question: ${printArray}
`);
    console.log(`Your answer: ${answer}`);
    if (Number(answer) === correctAnswer) {
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
