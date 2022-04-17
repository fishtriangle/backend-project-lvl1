import readlineSync from 'readline-sync';
import answerNormalize from './answerNormalize.js';

function askQuestion(question, isStringAnswer) {
  console.log(`Question: ${question}`);

  const userAnswer = readlineSync.question('Your answer: ');
  let userAnswerNormalized;

  if (isStringAnswer) {
    userAnswerNormalized = answerNormalize(userAnswer);
    if (!userAnswerNormalized) {
      console.log('You gave not "yes" or "no" reply. Answer properly!');
      return askQuestion(question, isStringAnswer);
    }
  }
  return [userAnswer, userAnswerNormalized];
}

export default function answerGenerator(createQuestAnswer, isStringAnswer) {
  const answer = {};
  answer.questAnswer = createQuestAnswer();

  const userAnswer = askQuestion(answer.questAnswer.question, isStringAnswer);

  const result = (
    userAnswer[0] === answer.questAnswer.answer
    || userAnswer[1] === answer.questAnswer.answer
  );

  return {
    result,
    userAnswer: userAnswer[0],
    rightAnswer: answer.questAnswer.answer,
  };
}
