import brainEvenQuestion from './questionGenerator/brain-even/brainEvenQuestion.js';
import answerGenerator from './answerGenerator.js';
import calcQuestion from './questionGenerator/brain-calc/calcQuestion.js';
import brainGcdQuestion from './questionGenerator/brain-gcd/brainGcdQuestion.js';
import brainProgression from './questionGenerator/brain-progression/brainProgression.js';
import brainPrime from './questionGenerator/brain-prime/brainPrime.js';

export default function questionBlock(name, gameType) {
  let questAnswer;

  switch (gameType) {
    case 'brainEven': {
      questAnswer = brainEvenQuestion();
      break;
    }
    case 'calcGame': {
      questAnswer = calcQuestion();
      break;
    }
    case 'brainGcd': {
      questAnswer = brainGcdQuestion();
      break;
    }
    case 'brainProgression': {
      questAnswer = brainProgression();
      break;
    }
    case 'brainPrime': {
      questAnswer = brainPrime();
      break;
    }

    default: {
      throw new Error('There is no such game!');
    }
  }

  console.log(`Question: ${questAnswer.question}`);

  const userAnswer = answerGenerator(gameType);

  const isAnswerCorrect = userAnswer[0] === questAnswer.answer;

  if (!isAnswerCorrect) {
    console.log(`'${userAnswer[1]}' is wrong answer ;(. Correct answer was '${questAnswer.answer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }

  console.log('Correct!');

  return true;
}
