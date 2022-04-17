import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';
import nod from '../../utils/nod.js';

function brainGcdQuestion() {
  const QuestNAnswer = {};

  const firstNum = random(1, 100);
  const secondNum = random(1, 100);

  QuestNAnswer.question = `${firstNum} ${secondNum}`;
  QuestNAnswer.answer = nod(firstNum, secondNum).toString();

  return QuestNAnswer;
}

export default function brainGcdGame() {
  const { questAnswer, userAnswer } = answerGenerator(brainGcdQuestion, false);

  if (!(userAnswer === questAnswer.answer)) {
    return {
      result: false,
      userAnswer,
      rightAnswer: questAnswer.answer,
    };
  }

  return {
    result: true,
    userAnswer,
    rightAnswer: questAnswer.answer,
  };
}
