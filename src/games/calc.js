import getRandomNumber from '../getRandomNumber.js';

const getRandOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[randOperatorIndex];
};

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return Error('Incorrect operator');
  }
};

export default function generateRound() {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operator = getRandOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
  return [question, correctAnswer];
}
