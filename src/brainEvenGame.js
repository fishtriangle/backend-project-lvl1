import readlineSync from 'readline-sync';
import questionBlock from './questionBlock.js';

export default function brainEvenGame() {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  questionBlock(name);
}
