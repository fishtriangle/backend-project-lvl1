import random from '../utils/random.js';
import game from '../gameEngine.js';

const calcQuestion = 'What is the result of the expression?';
const mathSigns = ['+', '-', '*'];

function calculate(firstNum, secondNum, expression) {
  switch (expression) {
    case mathSigns[0]: {
      return firstNum + secondNum;
    }
    case mathSigns[1]: {
      return firstNum - secondNum;
    }
    case mathSigns[2]: {
      return firstNum * secondNum;
    }
    default: {
      throw new Error('There is no such expression!');
    }
  }
}

export default function brainCalcGame() {
  const firstNum = random(1, 100);
  const secondNum = random(1, 100);
  const expression = mathSigns[random(0, mathSigns.length - 1)];

  const question = `${firstNum} ${expression} ${secondNum}`;
  const answer = String(calculate(firstNum, secondNum, expression));

  return [question, answer];
}

export const calcGame = () => game(calcQuestion, brainCalcGame);
