import _ from 'lodash';

const createProgression = () => {
  const progression = [];
  let aggregator = _.random(0, 100);
  const counter = _.random(1, 10);
  for (let i = 1; i <= _.random(5, 15); i += 1) {
    progression.push(aggregator);
    aggregator += counter;
  }
  return progression;
};

export default function brainProgression() {
  const QuestNAnswer = {};
  const progression = createProgression();
  const randomProgressionItemNumber = _.random(0, progression.length - 1);

  QuestNAnswer.question = progression.reduce(
    (previousValue, currentValue) => {
      if (currentValue === progression[randomProgressionItemNumber]) {
        return `${previousValue} ..`;
      }
      return (`${previousValue} ${currentValue}`);
    },
    '',
  );

  QuestNAnswer.answer = progression[randomProgressionItemNumber].toString();
  QuestNAnswer.answerInString = progression[randomProgressionItemNumber].toString();

  return QuestNAnswer;
}
