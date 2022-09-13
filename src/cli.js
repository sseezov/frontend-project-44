import { question } from 'readline-sync';

export default function Greet () {
  const userName = question('May I have your name? ');
  console.log('Hi ' + userName + '!');
}
