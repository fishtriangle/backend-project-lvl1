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
  return answerGenerator(calcQuestion, false);
}
