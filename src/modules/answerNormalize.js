import answerGenerator from './answerGenerator.js';

const yesPhrase = ['yes', 'y', 'Yes', 'Y'];
const noPhrase = ['no', 'n', 'No', 'N'];

export default function answerNormalize(answer, question) {
  if (yesPhrase.find((phrase) => phrase === answer)) {
    return 'Yes';
  }
  if (noPhrase.find((phrase) => phrase === answer)) {
    return 'No';
  }
  console.log('You gave not "yes" or "no" reply. Answer properly!');
  const newAnswer = answerGenerator(question);
  return answerNormalize(newAnswer, question);
}
