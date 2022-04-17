export default function random(startValue, endValue = startValue) {
  if (Array.isArray(startValue)) {
    return startValue[Math.floor(Math.random() * startValue.length)];
  }
  return (Math.floor(Math.random() * (endValue - startValue + 1)) + startValue);
}
