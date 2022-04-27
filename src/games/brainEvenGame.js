import random from '../utils/random.js';
import game from '../gameEngine.js';

const evenQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

export default function brainEvenGame() {
  const question = random(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}

export const evenGame = () => game(evenQuestion, brainEvenGame);
