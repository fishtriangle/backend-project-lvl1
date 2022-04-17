import readlineSync from 'readline-sync';

export default function answerGenerator(question) {
  console.log(`Question: ${question}`);

  return readlineSync.question('Your answer: ');
}
