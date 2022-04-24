import random from '../utils/random.js';

function createProgression(startingNumber = 1, step = 1, length = 5) {
  const progression = [];
  let aggregator;
  for (let i = 0; i <= length; i += 1) {
    aggregator = startingNumber + (step * i);
    progression.push(aggregator);
  }
  return progression;
}

function createProgressionQuestion(progression, hiddenIndex) {
  const question = [...progression];
  question[hiddenIndex] = '..';
  return question.join(' ');
}

export default function brainProgressionGame() {
  const progression = createProgression(random(0, 100), random(1, 10), random(5, 15));
  const hiddenIndex = random(0, progression.length - 1);

  const question = createProgressionQuestion(progression, hiddenIndex);
  const answer = progression[hiddenIndex].toString();

  return [question, answer];
}
