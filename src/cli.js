import { question } from 'readline-sync';

export default function greet() {
  const userName = question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
}
