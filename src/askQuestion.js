import readlineSync from 'readline-sync';

const askQuestion = () => {
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === 'yes' || userAnswer === 'y' || userAnswer === 'Y') {
    return true;
  }
  if (userAnswer === 'no' || userAnswer === 'n' || userAnswer === 'N') {
    return false;
  }
  console.log('You gave not "yes" or "no" reply. Answer properly!');
  return askQuestion();
};

export default askQuestion;
