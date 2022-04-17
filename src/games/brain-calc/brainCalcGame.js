import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';

function calcQuestion() {
  const QuestNAnswer = {};

  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const expression = random(['+', '-', '*']);

  QuestNAnswer.question = `${firstNum} ${expression} ${secondNum}`;
  QuestNAnswer.answer = (eval(QuestNAnswer.question)).toString();

  return QuestNAnswer;
}

export default function brainCalcGame() {
  const { questAnswer, userAnswer } = answerGenerator(calcQuestion, false);

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
