const add =  (x, y) => {
  const set = new Set();
  set.add(x);
  set.add(y);
  return set;
}
console.log(add(111, 999)); 

Promise.resolve();