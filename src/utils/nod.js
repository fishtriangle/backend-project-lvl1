export default function nod(x, y) {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
}
