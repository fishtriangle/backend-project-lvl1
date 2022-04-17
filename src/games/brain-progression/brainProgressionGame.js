import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';
import createProgression from '../../utils/createProgression.js';

function brainProgressionQuestion() {
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

export default function brainProgressionGame() {
  const { questAnswer, userAnswer } = answerGenerator(brainProgressionQuestion, false);

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
