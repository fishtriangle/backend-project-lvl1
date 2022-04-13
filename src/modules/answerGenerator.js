import readlineSync from 'readline-sync';

export default function answerGenerator(gameType) {
  const userAnswer = readlineSync.question('Your answer: ');

  if ((gameType === 'brainEven') || (gameType === 'brainPrime')) {
    if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'Y' || userAnswer === 'Yes') {
      return ['Yes', userAnswer];
    }
    if (userAnswer === 'no' || userAnswer === 'n' || userAnswer === 'N' || userAnswer === 'No') {
      return ['No', userAnswer];
    }
    console.log('You gave not "yes" or "no" reply. Answer properly!');
    return answerGenerator(gameType);
  }

  return [userAnswer, userAnswer];
}
