import _ from 'lodash';
import askQuestion from './askQuestion.js';

export default function questionBlock(name) {
  for (let counter = 0; counter <= 2; counter += 1) {
    const numberToCheck = _.random(1, 100);
    const isEven = numberToCheck % 2 === 0;

    console.log(`Question: ${numberToCheck}`);

    const userAnswerBool = askQuestion();

    if (isEven !== userAnswerBool) {
      console.log(`'${
        userAnswerBool ? 'Yes' : 'No'
      }' is wrong answer ;(. Correct answer was '${
        !userAnswerBool ? 'yes' : 'no'
      }'.`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
