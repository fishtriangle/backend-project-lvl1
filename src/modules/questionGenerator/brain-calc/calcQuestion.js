import _ from 'lodash';

export default function calcQuestion() {
  const QuestNAnswer = {};

  const firstNum = _.random(1, 100);
  const secondNum = _.random(1, 100);
  const expression = _.random(1, 3);
  switch (expression) {
    case 1:
      QuestNAnswer.question = `${firstNum} + ${secondNum}`;
      QuestNAnswer.answer = (firstNum + secondNum).toString();
      break;
    case 2:
      QuestNAnswer.question = `${firstNum} - ${secondNum}`;
      QuestNAnswer.answer = (firstNum - secondNum).toString();
      break;
    case 3:
      QuestNAnswer.question = `${firstNum} * ${secondNum}`;
      QuestNAnswer.answer = (firstNum * secondNum).toString();
      break;
    default:
      throw new Error('No such math expression!');
  }
  QuestNAnswer.answerInString = QuestNAnswer.answer.toString();
  return QuestNAnswer;
}
