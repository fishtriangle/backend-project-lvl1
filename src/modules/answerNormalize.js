const yesPhrase = ['yes', 'y', 'Yes', 'Y'];
const noPhrase = ['no', 'n', 'No', 'N'];

export default function answerNormalize(answer) {
  if (yesPhrase.find((phrase) => phrase === answer)) {
    return 'Yes';
  }
  if (noPhrase.find((phrase) => phrase === answer)) {
    return 'No';
  }
  return undefined;
}
