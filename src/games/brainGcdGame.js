import random from '../utils/random.js';
import game from '../gameEngine.js';

const gcdQuestion = 'Find the greatest common divisor of given numbers.';

function gcd(x, y) {
  if (!y) return x;
  return gcd(y, x % y);
}

export default function brainGcdGame() {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);

  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum).toString();
  console.log(answer);

  return [question, answer];
}

export const gcdGame = () => game(gcdQuestion, brainGcdGame);
