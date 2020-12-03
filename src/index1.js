// import '@babel/polyfill'
import "core-js/es6/promise"
const add =  (x, y) => {
  const set = new Set();
  set.add(x);
  set.add(y);
  return set;
}
console.log(add(111, 999)); 

Promise.resolve(110).then(res => {
  console.log(res)
})