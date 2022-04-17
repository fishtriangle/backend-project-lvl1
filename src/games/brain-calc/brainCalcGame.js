import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';

function calcQuestion() {
  const QuestNAnswer = {};

  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const expression = random(['+', '-', '*']);

  QuestNAnswer.question = `${firstNum} ${expression} ${secondNum}`;
  switch (expression) {
    case '+': {
      QuestNAnswer.answer = `${firstNum + secondNum}`;
      break;
    }
    case '-': {
      QuestNAnswer.answer = `${firstNum - secondNum}`;
      break;
    }
    case '*': {
      QuestNAnswer.answer = `${firstNum * secondNum}`;
      break;
    }
    default: {
      throw new Error('There is no such expression!');
    }
  }

  return QuestNAnswer;
}

export default function brainCalcGame() {
  return answerGenerator(calcQuestion, false);
}
