import random from '../utils/random.js';

function gcd(x, y) {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
}

export default function brainGcdGame() {
  const QuestNAnswer = {};

  const firstNum = random(1, 100);
  const secondNum = random(1, 100);

  QuestNAnswer.question = `${firstNum} ${secondNum}`;
  QuestNAnswer.answer = gcd(firstNum, secondNum).toString();

  return QuestNAnswer;
}
