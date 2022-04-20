import readlineSync from 'readline-sync';
import answerGenerator from './modules/answerGenerator.js';

export default function game(gameRules, questionGenerator, needNormalize) {
  const roundQty = 3;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(gameRules);

  for (let counter = 1; counter <= roundQty; counter += 1) {
    const { question, answer: rightAnswer } = questionGenerator();

    console.log(`Question: ${question}`);

    const userAnswer = answerGenerator(needNormalize);

    const result = userAnswer === rightAnswer;

    if (!result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
