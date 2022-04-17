import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';

function evenQuestion() {
  const QuestNAnswer = {};
  QuestNAnswer.question = random(1, 100);
  QuestNAnswer.answer = (QuestNAnswer.question % 2 === 0) ? 'Yes' : 'No';
  return QuestNAnswer;
}

export default function brainEvenGame() {
  const { questAnswer, userAnswer, userAnswerNormalized } = answerGenerator(evenQuestion, true);

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
