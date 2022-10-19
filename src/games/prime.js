import { question } from 'readline-sync';

export default function brainPrime(username = 'username', rounds = 3) {
  let score = 0;
  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };
  while (score < rounds) {
    const randomNumber = Math.round(Math.random() * 1000);
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const answer = question(`Answer "yes" if given number is prime. Otherwise answer "no".
Question: ${randomNumber}
`);
    console.log(`Your answer: ${answer}`);
    if (answer === correctAnswer) {
      score += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${username}!`);
      score = 0;
      break;
    }
  }

  if (score === 3) console.log(`Congratulations, ${username}!`);
}
