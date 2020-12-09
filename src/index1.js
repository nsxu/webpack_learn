// import '@babel/polyfill'
// import "core-js/es6/promise"

import './css/postcss_test.css'
const add =  (x, y) => {
  const set = new Set();
  set.add(x);
  set.add(y);
  return set;
}
console.log(add(111, 55)); 

import print from './lib/print'
print()

// 手动实现js的hmr
if (module.hot) {
  module.hot.accept('./lib/print', function () {
    print()
  })
}