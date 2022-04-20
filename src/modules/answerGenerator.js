import readlineSync from 'readline-sync';
import answerNormalize from './answerNormalize.js';

export default function answerGenerator(needNormalize) {
  let userAnswer = readlineSync.question('Your answer: ');

  if (needNormalize) {
    userAnswer = answerNormalize(userAnswer);
    if (!userAnswer) {
      console.log('You gave not "yes" or "no" reply. Answer properly!');
      return answerGenerator(needNormalize);
    }
  }
  return userAnswer;
}
