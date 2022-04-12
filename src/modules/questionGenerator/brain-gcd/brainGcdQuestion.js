import _ from 'lodash';

function nod(x, y) {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
}

export default function brainGcdQuestion() {
  const QuestNAnswer = {};

  const firstNum = _.random(1, 100);
  const secondNum = _.random(1, 100);

  QuestNAnswer.question = `${firstNum} ${secondNum}`;
  QuestNAnswer.answer = nod(firstNum, secondNum).toString();
  QuestNAnswer.answerInString = QuestNAnswer.answer.toString();

  return QuestNAnswer;
}
