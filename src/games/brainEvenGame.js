import random from '../utils/random.js';

const isEven = (number) => (number % 2 === 0);

export default function brainEvenGame() {
  const question = random(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
}
