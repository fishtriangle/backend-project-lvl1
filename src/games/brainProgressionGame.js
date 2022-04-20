import random from '../utils/random.js';

function createProgression(startingNumber = 1, step = 1, length = 5) {
  const progression = [];
  let aggregator = startingNumber;
  for (let i = 1; i <= length; i += 1) {
    progression.push(aggregator);
    aggregator += step;
  }
  return progression;
}

export default function brainProgressionGame() {
  const QuestNAnswer = {};
  const progression = createProgression(random(0, 100), random(1, 10), random(5, 15));
  const randomProgressionItemNumber = random(0, progression.length - 1);

  QuestNAnswer.question = progression.reduce(
    (previousValue, currentValue) => {
      if (currentValue === progression[randomProgressionItemNumber]) {
        return `${previousValue} ..`;
      }
      return (`${previousValue} ${currentValue}`);
    },
    '',
  ).trim();

  QuestNAnswer.answer = progression[randomProgressionItemNumber].toString();

  return QuestNAnswer;
}
