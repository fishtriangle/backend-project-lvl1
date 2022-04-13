import _ from 'lodash';

export default function brainPrime() {
  const QuestNAnswer = {};
  QuestNAnswer.question = _.random(2, 3600);
  for (let divider = QuestNAnswer.question - 1; divider >= 2; divider -= 1) {
    if (QuestNAnswer.question % divider === 0) {
      QuestNAnswer.answer = 'No';
      return QuestNAnswer;
    }
  }
  QuestNAnswer.answer = 'Yes';
  return QuestNAnswer;
}
