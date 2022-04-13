import _ from 'lodash';

export default function brainEvenQuestion() {
  const QuestNAnswer = {};
  QuestNAnswer.question = _.random(1, 100);
  QuestNAnswer.answer = (QuestNAnswer.question % 2 === 0) ? 'Yes' : 'No';
  return QuestNAnswer;
}
