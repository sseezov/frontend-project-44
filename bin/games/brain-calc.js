import { question } from 'readline-sync';

export default function brainCalc(username = 'username', rounds = 3) {
  let score = 0;
  const operationsSigns = ['+', '-', '*'];
  function setOperation(num1, num2, sign) {
    if (sign === '+') {
      return num1 + num2;
    } if (sign === '-') {
      return num1 - num2;
    } return num1 * num2;
  }

  const getRandomNumber = () => Math.floor(Math.random() * 20);

  const getRandomMathOperation = () => {
    const number = Math.floor(Math.random() * 3);
    return operationsSigns[number];
  };

  console.log('What is the result of the expression?');

  while (score < rounds) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const mathOperation = getRandomMathOperation();
    const result = setOperation(num1, num2, mathOperation);

    const answer = question(`Question: ${num1} ${mathOperation} ${num2}
`);
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

  if (score === 3) console.log(`Congratulations, ${username}`);
  return true;
}
