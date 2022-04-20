import random from '../utils/random.js';

function countAnswer(firstNum, secondNum, expression) {
  switch (expression) {
    case '+': {
      return `${firstNum + secondNum}`;
    }
    case '-': {
      return `${firstNum - secondNum}`;
    }
    case '*': {
      return `${firstNum * secondNum}`;
    }
    default: {
      throw new Error('There is no such expression!');
    }
  }
}

export default function brainCalcGame() {
  const QuestNAnswer = {};

  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const expression = random(['+', '-', '*']);

  QuestNAnswer.question = `${firstNum} ${expression} ${secondNum}`;
  QuestNAnswer.answer = countAnswer(firstNum, secondNum, expression);

  return QuestNAnswer;
}
