export default function createProgression(startingNumber = 1, step = 1, length = 5) {
  const progression = [];
  let aggregator = startingNumber;
  for (let i = 1; i <= length; i += 1) {
    progression.push(aggregator);
    aggregator += step;
  }
  return progression;
}
