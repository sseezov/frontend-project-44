import { generateInteger } from '../helpers.js';

export default () => {
  const progressionMaxLength = 10;
  let startNum = generateInteger();
  const stepNum = generateInteger(10);
  const progression = [startNum];

  while (progression.length < progressionMaxLength) {
    startNum += stepNum;
    progression.push(startNum);
  }

  const hiddenElement = generateInteger(progression.length - 1);
  const correctAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = `Question: ${progression.join(' ')}\n`;

  return { question, correctAnswer };
};
