import engine, { roundCount } from './engine.js';

export default function gameRunner(description, generateRound) {
  const rounds = [];
  for (let i = 0; i < roundCount; i += 1) {
    rounds[i] = generateRound();
  }
  return engine(rounds, description);
}
