import random from '../../utils/random.js';
import answerGenerator from '../../modules/answerGenerator.js';

function evenQuestion() {
  const QuestNAnswer = {};
  QuestNAnswer.question = random(1, 100);
  QuestNAnswer.answer = (QuestNAnswer.question % 2 === 0) ? 'Yes' : 'No';
  return QuestNAnswer;
}

export default function brainEvenGame() {
  return answerGenerator(evenQuestion, true);
}
