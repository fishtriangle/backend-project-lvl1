#!/usr/bin/env node

import readlineSync from 'readline-sync';
import _ from 'lodash';

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

const questionBlock = (name) => {
  for (let counter = 0; counter <= 2; counter += 1) {
    const numberToCheck = _.random(1, 100);
    const isEven = numberToCheck % 2 === 0;

    console.log(`Question: ${numberToCheck}`);

    const userAnswerBool = askQuestion();

    if (isEven !== userAnswerBool) {
      console.log(`'${
        userAnswerBool ? 'Yes' : 'No'
      }' is wrong answer ;(. Correct answer was \'${
        !userAnswerBool ? 'yes' : 'no'
      }'.`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  questionBlock(name);
};

brainEven();
