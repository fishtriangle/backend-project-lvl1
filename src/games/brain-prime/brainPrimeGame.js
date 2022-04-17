import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';

function brainPrimeQuestion() {
  const QuestNAnswer = {};
  QuestNAnswer.question = random(2, 3600);
  for (let divider = QuestNAnswer.question - 1; divider >= 2; divider -= 1) {
    if (QuestNAnswer.question % divider === 0) {
      QuestNAnswer.answer = 'No';
      return QuestNAnswer;
    }
  }
  QuestNAnswer.answer = 'Yes';
  return QuestNAnswer;
}

export default function brainPrimeGame() {
  const {
    questAnswer,
    userAnswer,
    userAnswerNormalized,
  } = answerGenerator(brainPrimeQuestion, true);

  if (!(userAnswerNormalized === questAnswer.answer)) {
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
