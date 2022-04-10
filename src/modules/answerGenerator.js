import readlineSync from 'readline-sync';

export default function answerGenerator(gameType) {
  const userAnswer = readlineSync.question('Your answer: ');

  if (gameType === 'brainEven') {
    if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'Y') {
      return [true, userAnswer];
    }
    if (userAnswer === 'no' || userAnswer === 'n' || userAnswer === 'N') {
      return [false, userAnswer];
    }
    console.log('You gave not "yes" or "no" reply. Answer properly!');
    return answerGenerator(gameType);
  }

  return [userAnswer, userAnswer];
}
