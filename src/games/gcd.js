import { question } from 'readline-sync';

export default function brainGcd(username = 'username', rounds = 3) {
  let score = 0;

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  console.log('Find the greatest common divisor of given numbers.');

  while (score < rounds) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const gcd = function (a, b) {
      if (!b) {
        return a;
      }
      return gcd(b, a % b);
    };

    const answer = question(`Question: ${num1} ${num2}
`);

    const result = gcd(num2, num1);
    console.log(`Your answer: ${answer}`);

    if (Number(answer) === result) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'
    Let's try again, ${username}!`);
      score = 0;
      return false;
    }
  }

  if (score === rounds) console.log(`Congratulations, ${username}`);
  return true;
}
