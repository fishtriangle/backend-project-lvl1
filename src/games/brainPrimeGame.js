import random from '../utils/random.js';
import game from '../gameEngine.js';

const primeQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

export default function brainPrimeGame() {
  const question = random(2, 3600);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
}

export const primeGame = () => game(primeQuestion, brainPrimeGame);
