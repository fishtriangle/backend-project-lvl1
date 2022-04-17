import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';
import answerNormalize from '../../modules/answerNormalize.js';

function evenQuestion() {
  const QuestNAnswer = {};
  QuestNAnswer.question = random(1, 100);
  QuestNAnswer.answer = (QuestNAnswer.question % 2 === 0) ? 'Yes' : 'No';
  return QuestNAnswer;
}

export default function brainEvenGame() {
  const questAnswer = evenQuestion();
  const userAnswer = answerGenerator(questAnswer.question);
  const userAnswerNormalized = answerNormalize(userAnswer, questAnswer.question);

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
