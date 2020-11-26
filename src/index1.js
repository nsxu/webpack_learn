function add (x, y) {
  const set = new Set();
  set.add(x);
  set.add(y);
  return set;
}
console.log(add(1, 2)); // eslint-disable-line