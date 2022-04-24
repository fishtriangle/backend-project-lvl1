import random from '../utils/random.js';

function calculate(firstNum, secondNum, expression) {
  switch (expression) {
    case '+': {
      return firstNum + secondNum;
    }
    case '-': {
      return firstNum - secondNum;
    }
    case '*': {
      return firstNum * secondNum;
    }
    default: {
      throw new Error('There is no such expression!');
    }
  }
}

export default function brainCalcGame() {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const expression = random(['+', '-', '*']);

  const question = `${firstNum} ${expression} ${secondNum}`;
  const answer = String(calculate(firstNum, secondNum, expression));

  return [question, answer];
}
