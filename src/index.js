import greetingBlock from './modules/greetingBlock.js';
import questions from './textQuestions.js';
import questionBlock from './modules/questionBlock.js';

export default function game(gameType) {
  const name = greetingBlock();
  let isAnswerRight;

  console.log(questions[gameType]);

  for (let counter = 0; counter <= 2; counter += 1) {
    isAnswerRight = questionBlock(name, gameType);
    if (!isAnswerRight) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
