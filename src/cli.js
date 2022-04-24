import readlineSync from 'readline-sync';

export default function cli() {
  console.log(`Hello, ${readlineSync.question('May I have your name? ')}!`);
}
