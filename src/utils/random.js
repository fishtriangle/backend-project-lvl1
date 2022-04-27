export default function random(startValue, endValue = startValue) {
  return (Math.floor(Math.random() * (endValue - startValue + 1)) + startValue);
}
