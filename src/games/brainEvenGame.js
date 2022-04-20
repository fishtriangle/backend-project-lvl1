import random from '../utils/random.js';

const isEven = (number) => (number % 2 === 0);

export default function brainEvenGame() {
  const QuestNAnswer = {};
  QuestNAnswer.question = random(1, 100);
  QuestNAnswer.answer = isEven(QuestNAnswer.question) ? 'Yes' : 'No';
  return QuestNAnswer;
}
