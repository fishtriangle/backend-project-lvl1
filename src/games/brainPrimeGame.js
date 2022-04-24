import random from '../utils/random.js';

const isPrime = (number) => {
  for (let divider = number - 1; divider >= 2; divider -= 1) {
    if (number % divider === 0) {
      return false;
    }
  }
  return true;
};

export default function brainPrimeGame() {
  const question = random(2, 3600);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
}
