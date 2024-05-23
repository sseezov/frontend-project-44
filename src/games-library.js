import gameCalc from "./games/game-calc.js";
import gameEven from "./games/game-even.js";

export default  {
  'even': {
    description: 'Answer "yes" if the number is even, otherwise answer "no".',
    questionAndAnswer: gameEven,
  },
  'calc': {
    description: 'What is the result of the expression?',
    questionAndAnswer: gameCalc,
  }
}