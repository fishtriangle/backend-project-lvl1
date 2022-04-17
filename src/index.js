import greetingBlock from './modules/greetingBlock.js';

export default function game(gameRules, gameFunction) {
  const name = greetingBlock();

  console.log(gameRules);

  for (let counter = 0; counter <= 2; counter += 1) {
    const { result, userAnswer, rightAnswer } = gameFunction();
    if (!result) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}
