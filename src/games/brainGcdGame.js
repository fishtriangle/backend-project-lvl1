import random from '../utils/random.js';

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

export default function brainGcdGame() {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);

  const question = `${firstNum} ${secondNum}`;
  const answer = gcd(firstNum, secondNum).toString();

  return [question, answer];
}
