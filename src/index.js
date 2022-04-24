import readlineSync from 'readline-sync';
import brainCalcGame from './games/brainCalcGame.js';
import brainEvenGame from './games/brainEvenGame.js';
import brainGcdGame from './games/brainGcdGame.js';
import brainPrimeGame from './games/brainPrimeGame.js';
import brainProgressionGame from './games/brainProgressionGame.js';

const questions = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainCalc: 'What is the result of the expression?',
  brainGcd: 'Find the greatest common divisor of given numbers.',
  brainProgression: 'What number is missing in the progression?',
  brainPrime: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

function game(gameRules, questionGenerator) {
  const roundQuantity = 3;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(gameRules);

  for (let counter = 0; counter < roundQuantity; counter += 1) {
    const [question, rightAnswer] = questionGenerator();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (!(userAnswer === rightAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  return true;
}

export const calcGame = () => game(questions.brainCalc, brainCalcGame);
export const evenGame = () => game(questions.brainEven, brainEvenGame);
export const gcdGame = () => game(questions.brainGcd, brainGcdGame);
export const primeGame = () => game(questions.brainPrime, brainPrimeGame);
export const progressionGame = () => game(questions.brainProgression, brainProgressionGame);
