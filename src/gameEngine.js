import readlineSync from 'readline-sync';

const roundsCount = 3;

export default function game(gameRules, questionGenerator) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(gameRules);

  for (let counter = 0; counter < roundsCount; counter += 1) {
    const [question, rightAnswer] = questionGenerator();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
